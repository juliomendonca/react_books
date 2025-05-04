const {
  atualizaLivro,
  deletaLivro,
  getTodosLivros,
  getLivroPorId,
  insereLivro,
} = require("../services/livro.js");

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    deletaLivro(id);
    res.status(204).send();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivroId(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function putLivro(req, res) {
  try {
    const id = req.params.id;
    const livroAtualizado = req.body;
    atualizaLivro(id, livroAtualizado);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  deleteLivro,
  getLivros,
  getLivroId,
  postLivro,
  putLivro,
};
