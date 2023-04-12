const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/* declaramos el esquema o estructura*/
const moviesSchema = new Schema(
  {
    /* declaramos la estructura de cada documento, clave, valor  */
    title: String,
    genre: String,
    image: String,
    category: String,
    date: Number,
  },
  { collection: "movies" }
);
/*("nombre de la coleccion", nombre del esquema)*/
const Movies = mongoose.model("movies", moviesSchema);
module.exports = Movies;
