const fs = require("fs");

function atualizaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const idxModificao = livrosAtuais.findindex((livro) => livro.id === id);

  const conteudoMudado = { ...livrosAtuais[idxModificao], ...modificacoes };

  livrosAtuais[idxModificao] = conteudoMudado;
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function deletaLivro(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];

  if (!livroFiltrado) {
    throw new Error("Livro não encontrado");
  }

  const novaListaDeLivros = livros.filter((livro) => livro.id !== id);

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

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

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const novaListaDeLivros = [...livros, livroNovo];

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

module.exports = {
  atualizaLivro,
  deletaLivro,
  getTodosLivros,
  getLivroPorId,
  insereLivro,
};
