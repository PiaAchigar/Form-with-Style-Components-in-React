import styled from "styled-components";
import { colores } from "./StylesApp";

const Section = styled.section`
  margin: 0;
  padding: 0;
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap");
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
`;

const Banner = styled.section`
  max-width: 100vw;
  div {
    width: 100%;
    img {
      width: 100%;
      opacity: 0.4;
    }
  }
`;

const Content = styled.section`
  position: absolute;
  top: 1rem;
  left: 6vw;
  max-width: 18rem;
  min-height: 2rem;
  color: ${colores.darkblue};
  h1 {
    font-weight: 800;
    font-size: 140%;
    margin-bottom: 0;
    position: relative;
  }
  p {
    margin: 0.5rem;
    font-size: 80%;
    font-weight: 600;
  }
  @media (min-width: 425px) {
    max-width: 23rem;
    top: 2.5rem;
    h1 {
      font-size: 180%;
    }
    p {
      font-size: 105%;
      margin: 0;
    }
  }
  @media (min-width: 768px) {
    max-width: 30rem;
    top: 3rem;
    h1 {
      font-size: 240%;
    }
    p {
      font-size: 160%;
      margin: 0;
    }
  }
`;
const SecCont = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 80rem;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem;
  img {
    /* position: absolute; */
    padding: 2rem 0 0 0;
    margin: 0 0.5rem;
    width: 1.5em;
    height: 2em;
    @media (min-width: 768px) {
      width: 7em;
      height: 6em;
    }
  }
`;

const SecQueEs = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  padding: 0.5rem;
  h2 {
    font-weight: 800;
    font-size: 140%;
    color: ${colores.darkblue};
  }
  p {
    font-weight: 600;
    font-size: 100%;
    color: ${colores.darkblue};
  }
  @media (min-width: 425px) {
    h2 {
      font-size: 180%;
    }
    p {
      font-size: 120%;
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 220%;
    }
    p {
      font-size: 180%;
    }
  }
`;

const SecComienza = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  h2 {
    font-weight: 800;
    font-size: 150%;
    color: ${colores.darkblue};
  }
  @media (min-width: 425px) {
    h2 {
      font-size: 180%;
    }
  }
  @media (min-width: 425px) {
    h2 {
      font-size: 220%;
    }
  }
`;

const DivBtn = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const P = styled.p`
  font-weight: 600;
  font-size: 180%;
  color: ${colores.darkblue};
  span {
    color: ${colores.orange};
  }
`;

const ForoF = styled.div`
  display: flex;
`;

export {
  SecQueEs,
  Section,
  Content,
  SecCont,
  Banner,
  P,
  SecComienza,
  DivBtn,
  ForoF,
};
