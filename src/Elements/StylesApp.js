import styled from "styled-components";

const DivApp = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap");
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
  }
`;
const Main = styled.main`
  display: flex;
  justify-content: center;

  height: 498px;
  width: 769px;
  left: -368px;
  top: -256px;
  border-radius: 0px;
`;

const colores = {
  borde: "#0075FF",
  error: "#F64B3C",
  exito: "#0CCA6F",
  hover: "#196C84",
  lightblue: "#196C84",
  orange: "#F2966B",
  darkblue: "#224E68",
  cardblue: "#F4FBFF",
};

export { Main, DivApp, colores };
