// rotas > livro.js

const { Router } = require("express");
const {
  putLivro,
  deleteLivro,
  getLivroId,
  getLivros,
  postLivro,
} = require("../controllers/livro");

const router = Router();

router.get("/", getLivros).get("/:id", getLivroId);

router.post("/", postLivro);

router.patch("/:id", putLivro);

router.delete("/:id", deleteLivro);

module.exports = router;
