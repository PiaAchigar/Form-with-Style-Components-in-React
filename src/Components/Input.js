import React, { useState } from "react";
import {
  Label,
  GrupoInput,
  LeyendaError,
  IconoValidacion,
  Input,
} from "../Elements/Forms";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ComponenteInput = ({
  estado,
  setEstado,
  label,
  type,
  name,
  placeholder,
  leyendaError,
  expresionRegular,
}) => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    nameEmprendimiento: "",
    email: "",
    pais: "",
    description: "",
    telefono: null,
    files: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setEstado({ ...estado, campo: e.target.value });
    // setUser({
    //   ...user,
    //   [e.target.name]: e.target.value,
    // });
  };
  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        setEstado({ ...estado, valido: "true" });
      } else {
        setEstado({ ...estado, valido: "false" });
      }
    }
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
          id={name}
          value={estado.campo}
          onChange={handleChange}
          onKeyUp={validacion} //se ejecuta cuanto toca una tecla
          onBlur={validacion} //se ejecuta cuando cliqueo afuera
          valido={estado.valido} // es el responsable del estilo verde o rojo(cuando esta mal)
        />
        <IconoValidacion
          icon={estado.valido === "true" ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default ComponenteInput;
