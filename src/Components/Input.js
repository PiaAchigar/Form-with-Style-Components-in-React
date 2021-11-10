import React, { useState } from "react";
import {
  Label,
  GrupoInput,
  LeyendaError,
  IconoValidacion,
  Input,
} from "../Elements/Forms";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ComponenteInput = ({ label, type, name, placeholder }) => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    nameEmprendimiento: "",
    email: "",
    pais: "",
    description: "",
    files: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // const sendData = (e) => {
  //   console.log(user);
  //   e.preventDefault();
  // };

  // const rolShow = () => {
  //   if (user.rol === "emprendedor") return "show";
  //   else return "hide";
  // };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <GrupoInput>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={user.nombre}
          onChange={handleChange}
          id={name}
        />
        <IconoValidacion icon={faCheckCircle} />
      </GrupoInput>
      <LeyendaError>
        Se espera una o varias palabras de no mas de 16 caracteres, letras,
        mayusculas y minusculas
      </LeyendaError>
    </div>
  );
};

export default ComponenteInput;
