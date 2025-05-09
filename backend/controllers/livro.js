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

    if (id && Number(id)) {
      deletaLivro(id);
      res.send("livro deletado com sucesso");
    } else {
      res.status(422);
      res.send("ID inválido");
    }
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

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if (req.body.nome) {
      insereLivro(livroNovo);
      res.status(201);
      res.send("Livro inserido com sucesso");
    } else {
      res.status(422);
      res.send("O campo nome é obrigatório");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function putLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;
      atualizaLivro(body, id);
      res.send("Item modificado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
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
