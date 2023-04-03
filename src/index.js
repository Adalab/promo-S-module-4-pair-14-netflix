const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

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
 const valor = req.query.genre
 console.log(valor)
  console.log("Pidiendo a la base de datos información de los empleados.");
  connection
    .query(`SELECT * FROM movies WHERE genderMovie=?` , [valor])
    .then(([results, fields]) => {
      console.log("Información recuperada:");
      results.forEach((result) => {
        console.log(result);
      });

      // res.json(results);
      res.json({
        success: true,
        movies: results,
      });
    })
    .catch((err) => {
      throw err;
    });
});
