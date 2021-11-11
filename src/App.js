import React, { useState } from "react";
import {
  Form,
  Label,
  ContenedorTerminos,
  ContenedorBtnEnvio,
  Boton,
  MensajeExito,
  MensajeError,
} from "./Elements/Forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import Input from "./Components/Input";

import Axios from 'axios'

function App() {
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
  const [logo, setLogo] = useState({ campo: "", valido: null });
  const [terminos, setTerminos] = useState(false);
  const [formValido , setFormValido] = useState(null)

  const checkTerminos = (e) =>{
    setTerminos(e.target.checked)
  }
  
  const onSubmit = (e) =>{
    e.preventDefault()
    
    if (  nombre.valido=== 'true' &&
    apellido.valido==='true'&&
    email.valido==='true'&&
    pais.valido==='true'&&
    descripcion.valido==='true'&&
    password.valido==='true'&&
    password2.valido==='true'&&
    terminos === true
    ){sendData()
      restartForm()
      setFormValido(true)}
    else
    {setFormValido(false)}
}
    

    const sendData= ()=>{

      const newUser = {
      nombre : nombre.campo,
      apellido: apellido.campo,
      email: email.campo,
      pais: pais.campo,
      descripcion: descripcion.campo,
      password: password.campo,
      proyecto: nombreEmprendimiento.campo,
      telefono: telefono.campo,
      terminos: terminos
    } 
      
    Axios.post('https://jsonplaceholder.typicode.com/posts', newUser)
      .then( res => console.log(res))
      .catch(err => console.log(err))
    }

     const restartForm = () =>{
      setNombre({ campo: "", valido: null })
      setApellido({ campo: "", valido: null })
      setPassword({ campo: "", valido: null })
      setPassword2({ campo: "", valido: null })
      setEmail({ campo: "", valido: null })
      setNombreEmprendimiento({ campo: "", valido: null })
      setPais({ campo: "", valido: null })
    }   


  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    description: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
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
    <main>
      <Form action="" onSubmit={onSubmit}>
        <Input
          estado={nombre}
          setEstado={setNombre}
          label="Nombre del Emprendedor"
          type="text"
          name="nombre"
          placeholder="Su nombre..."
          leyendaError="Debe de colocar letras mayusculas y/o minusculas de 4 a 16 caracteres 😜"
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={email}
          setEstado={setEmail}
          label="Email"
          type="email"
          name="email"
          placeholder="correo@correo.com"
          leyendaError="Debe de colocar letras mayusculas y/o minusculas de 4 a 16 caracteres 😜"
          expresionRegular={expresiones.correo}
        />
        <Input
          estado={apellido}
          setEstado={setApellido}
          label="Apellido"
          type="text"
          name="apellido"
          placeholder="Apellido..."
          leyendaError="Debe de colocar letras mayusculas y/o minusculas de 4 a 16 caracteres 😜"
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={password}
          setEstado={setPassword}
          label="Contraseña"
          type="password"
          name="password"
          placeholder="Escribe tu password..."
          leyendaError="Entre 4 y 10 digitos esta bien 😜"
          expresionRegular={expresiones.password}
        />
        <Input
          estado={nombreEmprendimiento}
          setEstado={setNombreEmprendimiento}
          label="Nombre de su Emprendimiento..."
          type="text"
          name="nombreEmprendimiento"
          placeholder="Escriba aquí el nombre del emprendimiento..."
          leyendaError="Entre 4 y 10 digitos esta bien 😜"
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={password2}
          setEstado={setPassword2}
          label="Repetir Contraseña"
          type="password"
          name="password2"
          placeholder="Escribe nuevamente su password..."
          leyendaError="Ambas contraseñas deben ser iguales"
          funcion={validarPasword2}
        />
        <Input
          estado={descripcion}
          setEstado={setDescripcion}
          label="Descripción de su Emprendimiento"
          type="text"
          name="descripcion"
          placeholder="Contanos sobre tu emprendimiento..."
          leyendaError="Necesitamos que nos cuentes sobre tu emprendimeito "
          expresionRegular={expresiones.description}
        />
        <Input
          estado={pais}
          setEstado={setPais}
          label="País de residencia"
          type="text"
          name="pais"
          placeholder="Escriba su país de residencia"
          leyendaError="Entre 4 y 10 digitos esta bien 😜"
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={telefono}
          setEstado={setTelefono}
          label="Telefono"
          type="number"
          name="telefono"
          placeholder="Escribe tu telefono - no es obligatorio..."
          leyendaError="😜"
          expresionRegular=""
        />
      {/*   <Input
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
            <input type="checkbox" name="terminos" id="terminos" checked={terminos} onChange={checkTerminos}/>
            Acepto los terminos y condiciónes
          </Label>
        </ContenedorTerminos>
        {formValido===false && (
          <MensajeError>
            <div>
            <FontAwesomeIcon icon={faExclamationTriangle} />
              <p>
              <b>Error:</b> Faltan cositas en el formulario por completar 😉
              </p>
            </div>
          </MensajeError>
        )}
        <ContenedorBtnEnvio>
          <Boton type="submit">Enviar</Boton>
       {formValido===true &&  
       (<MensajeExito>
        <FontAwesomeIcon icon={faExclamationTriangle} />
        <p>
          <b>Yey!!</b> El formulario se envió exitosamente! 😉
        </p>
      {/*   <MensajeExito>El Formulario se envio exitosamente!</MensajeExito> */}
      </MensajeExito>
      
      )
        
       
       
       }
        </ContenedorBtnEnvio>
      </Form>
    </main>
  );
}
export default App;
