import styled, { css } from "styled-components";

const colores = {
  fondo: "#C1E94E",
  btn: "#9B084F",
  letras: "#196C84",
};

const Nav = styled.nav`
  color: ${colores.letras};
  text-align: center;
  background-color: ${colores.fondo};
  height: 86px;
  max-width: 769px;
  left: -368px;
  top: -256px;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: red;
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 769px;
`;

const DivQueEs = styled.div`
  background-color: ${colores.fondo};
  height: 90px;
  width: 458px;
  left: -203px;
  top: -109px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    color: ${colores.letras};
  }
`;

export { Nav, DivContainer, DivQueEs };
