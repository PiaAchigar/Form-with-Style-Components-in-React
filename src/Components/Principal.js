import React from "react";
import {
  Section,
  Banner,
  Content,
  SecCont,
  SecQueEs,
  Ptitle,
  P,
  SecComienza,
  DivBtn,
  Img,
} from "../Elements/StylesPrincipal";
import { Link } from "react-router-dom";
import imgFondo from "../Assets/images/bg-index.jpg";
import imgFrame from "../Assets/images/Frame.png";
import imgCiudadano from "../Assets/images/ciudadano.png";
import imgCiudadanoDesc from "../Assets/images/ciudadanoDescription.png";
import imgEmprededor from "../Assets/images/emprendedor.png";
import imgEmprendedorDesc from "../Assets/images/emprenderorDescription.png";

const Principal = () => {
  return (
    <Section>
      <Banner>
        <div>
          <img src={imgFondo}></img>
        </div>
        <Content>
          <h1>
            {" "}
            ¡Participa en
            <br /> el hold-up!
          </h1>
          <p>
            Explora la plataforma y ayuda a emprendedorxs a resolver retos de su
            proyecto a través de la inteligencia colectiva
          </p>
        </Content>
      </Banner>
      <SecCont>
        <SecQueEs>
          <Ptitle>¿Qué es el hold_up?</Ptitle>
          <P>
            Plataforma de co-creación entre emprendedores socioambientales y
            ciudadanos para dar solución a un reto específico de un proyecto.
          </P>
        </SecQueEs>
        <img src={imgFrame}></img>
      </SecCont>
      <SecComienza>
        <Ptitle>Comienza ahora</Ptitle>
        <DivBtn>
          <Link to="/retos">
            <img src={imgEmprededor}></img>
            <Img src={imgEmprendedorDesc}></Img>
          </Link>
          <Link to="/form">
            <img src={imgCiudadano}></img>
          </Link>
        </DivBtn>
        <P>
          Ya tengo <span>cuenta</span>
        </P>
      </SecComienza>
    </Section>
  );
};

export default Principal;
