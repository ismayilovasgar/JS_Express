const express = require("express");
const { accessControl, defaultControl } = require("./middleware");

const users = [
  { id: 1, name: "Mustafa Murat Coskun", place: "Ankara" },
  { id: 2, name: "ASGAR ISMAYILOV", place: "Nakhchivan" },
];

const app = express();
const PORT = 5000;

// Scope Application;
// app.use(accessControl);

// localhost:5000/users
app.get("/users", [defaultControl, accessControl], (req, res, next) => {
  res.json(users);
});
app.get("/products", (req, res, next) => {
  res.send("<h>Products</h>1");
});

app.listen(PORT, () => {
  console.log("Server Started PORT: " + PORT.toFixed(0));
});
