import styled from "styled-components";

const DivApp = styled.div`
  margin: 0;
  padding: 0;
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap");
  font-family: "Raleway", sans-serif;

  a {
    text-decoration: none;
  }
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
  verde: "#70AF90",
};

export { DivApp, colores };
