const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/* declaramos el esquema o estructura*/
const actorSchema = new Schema(
  {
    /* declaramos la estructura de cada documento, clave, valor  */
    name: String,
    lastname: String,
    country: String,
    birthday: Date,
  },
  { collection: "Actors" }
);
/*("nombre de la coleccion", nombre del esquema)*/
const Actor = mongoose.model("actor", actorSchema);
module.exports = Actor;
