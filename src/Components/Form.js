import React, { useState } from "react";
import {
  Main,
  FormLabel,
  Label,
  ContenedorTerminos,
  ContenedorBtnEnvio,
  Boton,
  MensajeExito,
  MensajeError,
} from "../Elements/StylesForms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import ComponentInput from "./Input";

function Formulario() {
  //coloco el estado de validación de cada campo, para poder despues validar todo el formulario de una.
  const [nombre, setNombre] = useState({ campo: "", valido: null }); // campo: lo que ingrese el usuario(string), valido: para q me pinte de verde o rojo (true/false)
  const [apellido, setApellido] = useState({ campo: "", valido: null });
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [pais, setPais] = useState({ campo: "", valido: null });
  const [descripcion, setDescripcion] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [password2, setPassword2] = useState({ campo: "", valido: null });
  const [nombreEmprendimiento, setNombreEmprendimiento] = useState({
    campo: "",
    valido: null,
  });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });
  //const [logo, setLogo] = useState({ campo: "", valido: null });

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarPasword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        setPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };
  return (
    <FormLabel action="">
      <ComponentInput
        estado={nombre}
        setEstado={setNombre}
        label="Nombre del Emprendedor"
        type="text"
        name="nombre"
        placeholder="Su nombre..."
        leyendaError="Debe de colocar letras mayusculas y/o minusculas de 4 a 16 caracteres 😜"
        expresionRegular={expresiones.nombre}
      />
      <ComponentInput
        estado={email}
        setEstado={setEmail}
        label="Email"
        type="email"
        name="email"
        placeholder="correo@correo.com"
        leyendaError="Debe de colocar letras mayusculas y/o minusculas de 4 a 16 caracteres 😜"
        expresionRegular={expresiones.correo}
      />
      <ComponentInput
        estado={apellido}
        setEstado={setApellido}
        label="Apellido"
        type="text"
        name="apellido"
        placeholder="Apellido..."
        leyendaError="Debe de colocar letras mayusculas y/o minusculas de 4 a 16 caracteres 😜"
        expresionRegular={expresiones.nombre}
      />
      <ComponentInput
        estado={password}
        setEstado={setPassword}
        label="Contraseña"
        type="password"
        name="password"
        placeholder="Escribe tu password..."
        leyendaError="Entre 4 y 10 digitos esta bien 😜"
        expresionRegular={expresiones.password}
      />
      <ComponentInput
        estado={nombreEmprendimiento}
        setEstado={setNombreEmprendimiento}
        label="Nombre de su Emprendimiento..."
        type="text"
        name="nombreEmprendimiento"
        placeholder="Escriba aquí el nombre del emprendimiento..."
        leyendaError="Entre 4 y 10 digitos esta bien 😜"
        expresionRegular={expresiones.nombre}
      />
      <ComponentInput
        estado={password2}
        setEstado={setPassword2}
        label="Repetir Contraseña"
        type="password"
        name="password2"
        placeholder="Escribe nuevamente su password..."
        leyendaError="Ambas contraseñas deben ser iguales"
        funcion={validarPasword2}
      />
      <ComponentInput
        estado={descripcion}
        setEstado={setDescripcion}
        label="Descripción de su Emprendimiento"
        type="text"
        name="descripcion"
        placeholder="Contanos sobre tu emprendimiento..."
        leyendaError="Necesitamos que nos cuentes sobre tu emprendimeito "
        expresionRegular=""
      />
      <ComponentInput
        estado={pais}
        setEstado={setPais}
        label="País de residencia"
        type="text"
        name="pais"
        placeholder="Escriba su país de residencia"
        leyendaError="Entre 4 y 10 digitos esta bien 😜"
        expresionRegular={expresiones.nombre}
      />
      <ComponentInput
        estado={telefono}
        setEstado={setTelefono}
        label="Telefono"
        type="number"
        name="telefono"
        placeholder="Escribe tu telefono - no es obligatorio..."
        leyendaError="😜"
        expresionRegular={expresiones.telefono}
      />
      {/* <Input
          estado={logo}
          setEstado={setLogo}
          label="Logo"
          type="file"
          name="logo"
          placeholder="Examinar archivo"
          leyendaError="😜"
          expresionRegular=""
        /> */}
      <ContenedorTerminos>
        <Label>
          <input type="checkbox" name="terminos" id="terminos" />
          Acepto los terminos y condiciónes
        </Label>
      </ContenedorTerminos>
      {false && (
        <MensajeError>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <p>
            <b>Error:</b> Faltan cositas en el formulario por completar 😉
          </p>
        </MensajeError>
      )}
      <ContenedorBtnEnvio>
        <Boton type="submit">_enviar</Boton>
        <MensajeExito>El Formulario se envio exitosamente!</MensajeExito>
      </ContenedorBtnEnvio>
    </FormLabel>
  );
}
export default Formulario;
