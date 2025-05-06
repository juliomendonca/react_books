import { useEffect, useState } from "react";
import styled from "styled-components";

import { deleteFavorito, getFavoritos } from "../services/favoritos";
import livroImg from "../assets/livro.png";

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  height: 100vh;
  width: 100vw;
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0 100px;
  text-align: center;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  padding-top: 35px;
  text-align: center;
  width: 100%;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function deletarFavorito(id) {
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro de id: ${id} deletado!`);
  }

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <div className="App">
      <AppContainer>
        <div>
          <Titulo>Aqui estão seus livros favoritos:</Titulo>
          <ResultadoContainer>
            {favoritos.length !== 0
              ? favoritos.map((favorito) => (
                  <Resultado onClick={() => deletarFavorito(favorito.id)}>
                    <img src={livroImg} alt="livro" />
                    <p>{favorito.nome}</p>
                  </Resultado>
                ))
              : null}
          </ResultadoContainer>
        </div>
      </AppContainer>
    </div>
  );
}

export default Favoritos;
