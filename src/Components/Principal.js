import React from "react";
import { Banner, Content, DivQueEs } from "../Elements/StylesPrincipal";
import { Link } from "react-router-dom";
import imgFondo from "../Assets/images/bg-index.png";

const Principal = () => {
  return (
    <section>
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
      <div>
        <div>
          <p>¿Qué es el HOLD_UP?</p>
          <p>
            Plataforma de co-creación entre emprendedores socioambientales y
            ciudadanos para dar solución a un reto específico de un proyecto.
          </p>
        </div>
        <img></img>
      </div>
      <div>
        <div>
          <Link to="/form">
            {" "}
            <p>Quiero participar como</p>
          </Link>

          <p>emprendedor/a</p>
        </div>
        <div>
          <div>
            <p>Quiero participar como</p>
            <p>ciudadano/a</p>
          </div>
        </div>
        <p>
          Ya tengo <span>cuenta</span>
        </p>
      </div>
    </section>
  );
};

export default Principal;
