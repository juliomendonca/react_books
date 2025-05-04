const { getTodosLivros, getLivroPorId } = require("../services/livro.js");

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

module.exports = {
  getLivros,
  getLivroId,
};
