import styled from "styled-components";
import { colores } from "./StylesApp";
import imgEmprendedorDesc from "../Assets/images/emprenderorDescription.png";

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
      opacity: 0.4;
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
    font-size: 500%;
    margin-bottom: 0;
  }
  p {
    font-size: 200%;
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

const SecComienza = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 2em;
`;

const DivBtn = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const BtnEmprendedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26rem;
  height: 15rem;
  margin: 0.5rem;
  border-radius: 30rem;
  background-color: ${colores.darkblue};
  p {
    margin: 0;
    color: white;
    font-size: 200%;
    font-weight: 600;
  }
  h2 {
    margin: 0;
    color: ${colores.orange};
    font-size: 250%;
    font-weight: 700;
  }
`;
const ImgDescripcionCiud = styled.img`
  height: 15rem;
  display: none;
`;
const BtnCiudadano = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26rem;
  height: 15rem;
  margin: 0.5rem;
  border-radius: 30rem;
  background-color: ${colores.verde};
  &:hover ImgDescripcionCiud {
    display: block;
  }
  p {
    margin: 0;
    color: white;
    font-size: 200%;
    font-weight: 600;
  }
  h2 {
    margin: 0;
    color: ${colores.darkblue};
    font-size: 250%;
    font-weight: 700;
  }
`;

const P = styled.p`
  font-weight: 600;
  font-size: 200%;
  color: ${colores.darkblue};
  span {
    color: ${colores.orange};
  }
`;

const Img = styled.img`
  /* position: absolute;
  left: 17em;
  transition: all 500ms ease-out;
  opacity: 0;
  visibility: hidden; */
  /* &:hover {
    opacity: 0;
    visibility: hidden;
  } */
`;
const ForoF = styled.div`
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
  BtnEmprendedor,
  BtnCiudadano,
  ImgDescripcionCiud,
  Img,
  ForoF,
};
