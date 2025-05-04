import styled from "styled-components";

import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../titulo";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const NovosLivrosContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor={"#EB9B00"} tamanhoFonte={"36px"}>
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="livros" />
        ))}
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
