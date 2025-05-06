// rotas > Favorito.js

const { Router } = require("express");
const {
  deleteFavorito,
  getFavoritos,
  postFavorito,
} = require("../controllers/favoritos");

const router = Router();

router.get("/", getFavoritos);

router.post("/", postFavorito);

router.delete("/:id", deleteFavorito);

module.exports = router;
