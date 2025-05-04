import styled from "styled-components";
import { useState } from "react";

import { livros } from "./dadosPesquisa.js";
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

  function fazPesquisa(evento) {
    const textoDigitado = evento.target.value;
    const resultadoPesquisa = livros.filter((livro) =>
      livro.nome.toUpperCase().includes(textoDigitado.toUpperCase().trim())
    );
    setLivrosPesquisados(resultadoPesquisa);
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
      <Input
        onChange={(evento) => fazPesquisa(evento)}
        type="text"
        placeholder="Digite o nome do livro ou autor"
      />
      {livrosPesquisados.map((livro) => (
        <Resultado>
          <img src={livro.src} alt="livro pesquisado" />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
