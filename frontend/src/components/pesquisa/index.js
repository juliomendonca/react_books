import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

import { getLivros } from "../../services/livros";
import { postFavorito } from "../../services/favoritos";
import Input from "../input";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  height: 470px;
  padding: 85px 0;
  text-align: center;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  async function insertFavorito(id) {
    await postFavorito(id);
    alert(`Livro de id:${id} inserido!`);
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
      <Input
        onChange={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
        type="text"
        placeholder="Digite o nome do livro ou autor"
      />
      {livrosPesquisados.map((livro) => (
        <Resultado onClick={() => insertFavorito(livro.id)}>
          <img src={livro.src} alt="livro" />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
