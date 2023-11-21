const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hola Mundo!!");
});

app.get("/privado", (req, res) => {
  res.sendFile(__dirname + "/priv.html");
});

const PORT = 3000;

// const PORT = process.env.PORT || 3000; cuando el servidor te da el puerto que puedes usar

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
