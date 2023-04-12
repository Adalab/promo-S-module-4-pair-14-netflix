const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const mongoose = require("mongoose");

const dbConnect = require("../config/connection");
dbConnect();

//guardamos la conexion
let connection;
//creamos la conexión
mysql
  .createConnection({
    host: "127.0.0.1",
    database: "netflix",
    user: "root",
    password: "root",
  })
  .then((connec) => {
    connection = connec;
    connection
      .connect()
      .then(() => {
        console.log("Conectado con el identificador " + connection.threadId);
      })
      .catch((err) => {
        console.error("Error de conexion: " + err.stack);
      });
  })
  .catch((err) => {
    console.error("Error de configuración: " + err.stack);
  });

// create and config server
const server = express();
server.use(cors());
//para especificar el tamañ de intercambio de archivos
// server.use(express.json({limit:"10mb"}));
server.use(express.json());
server.set("view engine", "ejs");
// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Endpoints
//server.metodo(ruta,funcion)
//listar proyectos
//req:información de la petición
//res:enviar una repuesta del endpoint
server.get("/movies", (req, res) => {
  const valor = req.query.genre ? req.query.genre : "%";
  const order = req.query.sort ? req.query.sort : "asc";
  console.log(valor);
  console.log("Pidiendo a la base de datos información de los empleados.");

  let query;

  if (order === "asc") {
    query =
      "SELECT * FROM movies WHERE genderMovie like ? order by titleMovie asc";
  } else {
    query =
      "SELECT * FROM movies WHERE genderMovie like ? order by titleMovie desc";
  }

  connection
    .query(query, [valor])
    .then(([results, fields]) => {
      console.log("Información recuperada:");
      results.forEach((result) => {
        console.log(result);
      });

      res.json({
        success: true,
        movies: results,
      });
    })
    .catch((err) => {
      throw err;
    });
});
//endpoint users
server.post("/login", (req, res) => {
  console.log("Body.", req.body.email);
  console.log("Body.", req.body.password);

  console.log("Pidiendo a la base de datos información de los usuarios.");
  connection
    .query(`SELECT * FROM users WHERE emailUser= ? and passwordUser= ?`, [
      req.body.email,
      req.body.password,
    ])
    .then(([results]) => {
      console.log(results);
      if (results.length) {
        res.json({
          success: true,
          userId: "id_de_la_usuaria_encontrada",
        });
      } else {
        res.json({
          success: false,
          errorMessage: "Usuaria/o no encontrada/o",
        });
      }
    });
});

//endpoint users dinámicos
server.get("/movie/:movieId", (req, res) => {
  console.log(req.params);
  const foundMovie = req.params.movieId;
  const query = `SELECT * FROM movies WHERE idMovie= ?`;
  connection
    .query(query, [foundMovie])
    .then(([results]) => {
      console.log("Información recuperada idMovie:");
      console.log(results);
      console.log(foundMovie);
      res.render("movie", results[0]);
      // res.json({
      //   success: true,
      //   movies: results,
      // });
    })
    .catch((err) => {
      throw err;
    });
});

const staticServerPathWeb = "./src/public-react"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

const staticServerPathImages = "./src/public-movies-images"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathImages));
