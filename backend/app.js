const express = require("express");
const cors = require("cors");

const rotaFavorito = require("./routes/favorito");
const rotaLivro = require("./routes/livro");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/favoritos", rotaFavorito);
app.use("/livros", rotaLivro);

const port = 8000;

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
