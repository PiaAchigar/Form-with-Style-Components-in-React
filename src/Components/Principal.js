import React, { useState } from "react";
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
  BtnEmprendedor,
  BtnCiudadano,
} from "../Elements/StylesPrincipal";
import { Link } from "react-router-dom";
import imgFondo from "../Assets/images/bg-index.jpg";
import imgFrame from "../Assets/images/Frame.png";
import imgCiudadanoDesc from "../Assets/images/ciudadanoDescription.png";
import imgEmprendedorDesc from "../Assets/images/emprenderorDescription.png";

const Principal = () => {
  // const [img, setImg] = useState(false);
  // const [imgC, setimgC] = useState(false);
  // const ImgHover = () => {
  //   setImg(true);
  // };
  // const ImgOut = () => {
  //   setImg(false);
  // };
  // const ImgHoverC = () => {
  //   setimgC(true);
  // };
  // const ImgOutC = () => {
  //   setimgC(false);
  // };

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
            {/* onMouseOver={ImgHover} onMouseOut={ImgOut} */}
            <BtnEmprendedor>
              <p>Quiero participar como</p>
              <h2>emprendedor/ra</h2>
            </BtnEmprendedor>
            {/* <img
              src={imgEmprededor}
            ></img> */}
          </Link>
          {/* {img === true && (
            <div>
              <img src={imgEmprendedorDesc}></img>
            </div>
          )} */}
          <Link to="/form">
            <BtnCiudadano >
              <p>Quiero participar como</p>
              <h2>ciudadano/a</h2>
            </BtnCiudadano>
            {/* <img
              src={imgCiudadano}
              onMouseOver={ImgHoverC}
              onMouseOut={ImgOutC}
            ></img> */}
          </Link>
          {/* {imgC === true && (
            <div>
              <img src={imgCiudadanoDesc}></img>
            </div>
          )} */}
        </DivBtn>
        <P>
          Ya tengo <span>cuenta</span>
        </P>
      </SecComienza>
    </Section>
  );
};

export default Principal;
