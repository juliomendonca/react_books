const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];

  if (!livroFiltrado) {
    throw new Error("Livro não encontrado");
  }
  
  return livroFiltrado;
}

module.exports = {
  getTodosLivros,
  getLivroPorId
};
