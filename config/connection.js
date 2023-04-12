const mongoose = require("mongoose");

const dbConnect = () => {
  const user = "sabfiamo";
  const pass = "cUKNg3l7puYwDqDU";
  const dbName = "Netflix";

  // const uri = `mongodb+srv://${user}:${pass}@cluster0.fej2cbh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  const uri = `mongodb+srv://sabfiamo:${pass}@cluster0.fej2cbh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("conectado a mongodb"))
    .catch((e) => console.log("error de conexión", e));
};
module.exports = dbConnect;
