import styled from "styled-components";
import { colores } from "./StylesApp";

const Section = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap");
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif; ;
`;

const Banner = styled.section`
  max-width: 100vw;
  div {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

const Content = styled.section`
  position: absolute;
  top: 17%;
  left: 6vw;
  width: 50vw;
  color: ${colores.darkblue};
  h1 {
    font-weight: 800;
    font-size: 5rem;
    margin-bottom: 0;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
  }
`;
const SecCont = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 80em;
  margin: 4em 2em;
  img {
    /* position: absolute; */
    padding-top: 5em;
    width: 15em;
    height: 20em;
  }
`;

const SecQueEs = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 50em;
  padding: 0.5em 0.5em 0.5em 1em;
`;

const Ptitle = styled.p`
  font-weight: 800;
  font-size: 300%;
  color: ${colores.darkblue};
`;
const P = styled.p`
  font-weight: 600;
  font-size: 200%;
  margin-right: 5em;
  color: ${colores.darkblue};
`;

const SecComienza = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivBtn = styled.div`
  display: flex;
`;

export {
  SecQueEs,
  Section,
  Banner,
  Content,
  SecCont,
  Ptitle,
  P,
  SecComienza,
  DivBtn,
};
