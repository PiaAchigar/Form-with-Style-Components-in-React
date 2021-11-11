import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  borde: "#0075FF",
  error: "#f66060",
  exito: "#1ed12d",
  hover: "#196C84",
};

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 100px;
  @media (max-width: 800px) {
    display:grid;
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 900;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 80%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px grey;
  height: 45px;
  line-height: 45px;
  padding: 0 30px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 5px 0px 30px grey;
  }
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error}!important;
    `}
`;

const LeyendaError = styled.p`
  font-size: 12;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
  // Es el icono de Fontawesome pero con mis estilos
  position: absolute;
  right: 50px;
  bottom: 10px;
  z-index: 100;
  font-size: 24px;
  opacity: 0;

  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}
  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}
`;

const ContenedorTerminos = styled.div`
  grid-column: span 2;
  input {
    margin-right: 15px;
  }
`;

const ContenedorBtnEnvio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
`;

const Boton = styled.button`
  height: 45px;
  line-height: 45px;
  width: 100px;
  background-color: #222;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1 ease all;
  &:hover {
    box-shadow: 5px 0px 30px grey;
  }
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
  display: none;
`;

const MensajeError = styled.div`
  display: flex;
  width: 60%;
  height: 50px;
  background-color: ${colores.error};
  padding: 15px 15px 0 15px;
  border-radius: 5px;
  grid-column: span 2;
  p {
    margin: 0;
    text-align: center;
  }
  b {
    margin-left: 40px;
  }
`;

export {
  Form,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  ContenedorTerminos,
  ContenedorBtnEnvio,
  Boton,
  MensajeExito,
  MensajeError,
};
