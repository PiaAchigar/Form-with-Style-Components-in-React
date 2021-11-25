import { colores } from "../Elements/StylesApp";
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
} from "../Elements/StylesPrincipal";
import { Link } from "react-router-dom";
import imgFondo from "../Assets/images/bg-index.jpg";
import imgFrame from "../Assets/images/Frame.png";
import Btn from "./Btn";

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
            <Btn
              parrafo="Quiero participar como"
              persona="emprendedor/a"
              descripcion="Si soy ciudadano puedo registrarme en la plataforma y dar ideas
                de como los emprendedores pueden resolver sus retos apoyándolos
                desde mi área de conocimiento"
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
        <Link to="/login">
          <P>
            Ya tengo <span>cuenta</span>
          </P>
        </Link>
      </SecComienza>
    </Section>
  );
};

export default Principal;
