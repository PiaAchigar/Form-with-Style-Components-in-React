import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
  hover: "#196C84",
};

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
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
`;

const LeyendaError = styled.p`
  font-size: 12;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;
`;

const IconoValidacion = styled(FontAwesomeIcon)`
  // Es el icono de Fontawesome pero con mis estilos
  position: absolute;
  right: 50px;
  bottom: 10px;
  z-index: 100;
  font-size: 24px;
  //opacity: 0;
`;

export { Form, Label, GrupoInput, Input, LeyendaError, IconoValidacion };
