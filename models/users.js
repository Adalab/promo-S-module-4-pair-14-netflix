const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/* declaramos el esquema o estructura*/
const usersSchema = new Schema(
  {
    /* declaramos la estructura de cada documento, clave, valor  */
    user: String,
    password: String,
    email: String,
    plan_details: String,
  },
  { collection: "Users" }
);
/*("nombre de la coleccion", nombre del esquema)*/
const User = mongoose.model("users", usersSchema);
module.exports = User;
