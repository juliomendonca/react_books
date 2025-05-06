import styled from "styled-components";

import imagemLivro from "../assets/livro2.png";

import CardRecomenda from "../components/card";
import Pesquisa from "../components/pesquisa";
import UltimosLancamentos from "../components/ultimosLancamentos";

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  height: 100vh;
  width: 100vw;
`;

function Home() {
  return (
    <div className="App">
      <AppContainer>
        <Pesquisa />
        <UltimosLancamentos />
        <CardRecomenda
          titulo="Talvez você se interesse por"
          subtitulo="Angular 11"
          descricao="Construindo uma aplicação com a plataforma Google"
          img={imagemLivro}
        />
      </AppContainer>
    </div>
  );
}

export default Home;
