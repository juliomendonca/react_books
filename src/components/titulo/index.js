import styled from "styled-components";

export const Titulo = styled.h2`
  background-color: #fff;
  color: ${(props) => props.cor || "#EB9B00"};
  font-size: ${(props) => props.tamanhoFonte || "18px;"};
  margin: 0;
  padding: 30px 0;
  text-align: ${(props) => props.alinhamento || "center"};
  width: 100%;
`;
