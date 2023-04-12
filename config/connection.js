const mongoose = require("mongoose");

const dbConnect = () => {
  const user = "sabfiamo";
  const pass = "85rXz4xJns3L";
  const dbName = "Netflix";

  // const uri = `mongodb+srv://${user}:${pass}@cluster0.fej2cbh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  // const user = "garciaenricahabito";
  // const password = "cDGxujYj4hNvdkPh";
  // const dbName = "Netflix";

  // const uri = `mongodb+srv://garciaenricahabito:${password}@cluster0.bvgqmrc.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const uri = `mongodb+srv://sabfiamo:${pass}@cluster0.fej2cbh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("conectado a mongodb"))
    .catch((e) => console.log("error de conexión", e));
};
module.exports = dbConnect;
