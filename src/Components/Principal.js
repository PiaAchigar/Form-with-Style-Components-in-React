import React, { useState } from "react";
import { colores } from "../Elements/StylesApp";
import {
  Section,
  Banner,
  Content,
  SecCont,
  SecQueEs,
  BtnLogin,
  SecComienza,
  DivBtn,
} from "../Elements/StylesPrincipal";
import { Link } from "react-router-dom";
import imgFondo from "../Assets/images/bg-index.jpg";
import imgFrame from "../Assets/images/Frame.png";
import Btn from "./Btn";
import Modal from "./Modal";

const Principal = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

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
            Explora la plataforma y ayuda a emprendedores/as a resolver retos de
            su proyecto a través de la inteligencia colectiva
          </p>
        </Content>
      </Banner>
      <SecCont>
        <SecQueEs>
          <h2>¿Qué es el hold_up?</h2>
          <p>
            Plataforma de co-creación entre emprendedores socioambientales y
            ciudadanos para dar solución a un reto específico de un proyecto.
          </p>
        </SecQueEs>
        <img src={imgFrame}></img>
      </SecCont>
      <SecComienza>
        <h2>Comienza ahora</h2>
        <DivBtn>
          <Link to="/retos">
            <Btn
              parrafo="Quiero participar como"
              persona="emprendedor/a"
              descripcion="Si soy emprendedor puedo presentar los registrarme de mi proyecto a una gran comunidad de ciudadanos/as activos que me apoyarán a encontrar la mejor solución por medio de las ideas creativas"
              bgcolor={colores.darkblue}
              color={colores.orange}
            />
          </Link>
          <Link to="/form">
            <Btn
              parrafo="Quiero participar como"
              persona="ciudadano/a"
              descripcion="Si soy ciudadano puedo registrarme en la plataforma y dar ideas
                de como los emprendedores pueden resolver sus retos apoyándolos
                desde mi área de conocimiento"
              bgcolor={colores.verde}
              color={colores.darkblue}
            />
          </Link>
        </DivBtn>
        <BtnLogin onClick={toggle}>
          Ya tengo <span>cuenta</span>
        </BtnLogin>
        <Modal active={active} toggle={toggle}>
          <section>
            <p>E-mail</p>
            <input placeholder="xxxxx@gmail.com" />
            <p>Password</p>
            <input placeholder="xxxxxxxx" />
          </section>
        </Modal>
      </SecComienza>
    </Section>
  );
};

export default Principal;
