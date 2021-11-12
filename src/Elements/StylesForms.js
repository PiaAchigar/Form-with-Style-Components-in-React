import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colores } from "./StylesApp";

const FormBody = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
`;

const Entradas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 5rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const FormLabel = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  width: 80%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 90%;
    margin: 2rem 0 4rem 0;
  }
`;

const FormTitle = styled.div`
  max-width: 90vw;
  h1 {
    color: ${colores.lightblue};
    font-size: 4rem;
    font-weight: 800;
    position: relative;
    left: 8%;
    width: 70vw;
    @media (max-width: 800px) {
      font-size: 2.5rem;
      width: 80vw;
    }

    span {
      color: ${colores.orange};
    }
  }
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
  color: ${colores.lightblue};
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 80%;
  background-color: white;
  border-radius: 13px;
  height: 3rem;
  line-height: 45px;
  padding: 0 30px 0 10px;
  transition: 0.3s ease all;
  border: 1px solid gray;
  @media (max-width: 800px) {
    width: 90%;
  }
  &:focus {
    border: 3px solid ${colores.lightblue};
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
  right: 3.5rem;
  bottom: 0.8rem;
  z-index: 3;
  font-size: 24px;
  opacity: 0;

  @media (max-width: 800px) {
  }

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
    &:checked {
      background-color: ${colores.lightblue};
    }
  }
`;

const ContenedorBtnEnvio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
`;

const Boton = styled.button`
  height: 5rem;
  width: 15rem;
  font-size: 1rem;
  background-color: ${colores.lightblue};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.1 ease all;
  &:hover {
    box-shadow: 5px 0px 30px grey;
  }
`;

const MensajeExito = styled.div`
  display: flex;
  width: 25rem;
  height: 8rem;
  background-color: ${colores.exito};
  border-radius: 40px;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  margin: 2rem 0;

  img {
    width: 3.5rem;
  }
  div {
    width: 70%;
    display: flex;
    flex-direction: column;
  }
  p {
    color: white;
    margin: 0;
    font-size: 0.7rem;
    span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;

const MensajeError = styled.div`
  display: flex;
  margin: 2rem 0;
  width: 25rem;
  height: 8rem;
  background-color: ${colores.error};
  border-radius: 40px;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  img {
    width: 4rem;
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  p {
    color: white;
    margin: 0;
    font-size: 0.7rem;
    span {
      font-weight: 700;
      font-size: 1.8rem;
    }
  }
`;

export {
  FormLabel,
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
  FormTitle,
  FormBody,
  Entradas
};
