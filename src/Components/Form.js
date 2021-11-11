import React, { useState } from "react";
import {
  FormLabel,
  Label,
  ContenedorTerminos,
  ContenedorBtnEnvio,
  Boton,
  MensajeExito,
  MensajeError,
  FormTitle,
  FormBody
} from "../Elements/StylesForms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import Input from "./Input";

import Axios from 'axios'

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
      }
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
      .then( res => {console.log(res)
      restartForm()
      setFormValido(true)
        // To do--->>> Redireccionar al perfil para terminar de actualizar sus datos.
    }  
      )
      .catch(err => console.log(err))
    }

     const restartForm = () =>{
      setNombre({ campo: "", valido: null })
      setApellido({ campo: "", valido: null })
      setPassword({ campo: "", valido: null })
      setPassword2({ campo: "", valido: null })
      setEmail({ campo: "", valido: null })
      setDescripcion({ campo: "", valido: null })
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
    <FormBody>
      <FormTitle>
        <h1>Registro de <span>emprendedor</span></h1>
        </FormTitle>
      <FormLabel onSubmit={onSubmit}>
        <Input
          estado={nombre}
          setEstado={setNombre}
          label="Nombre"
          type="text"
          name="nombre"
          placeholder="Su nombre..."
          leyendaError="Debe de colocar letras mayusculas y/o minusculas de 4 a 16 caracteres 😜"
          expresionRegular={expresiones.nombre}
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
          estado={telefono}
          setEstado={setTelefono}
          label="Teléfono"
          type="number"
          name="telefono"
          placeholder="Escribe tu telefono - no es obligatorio..."
          leyendaError="😜"
          expresionRegular=""
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
          estado={password}
          setEstado={setPassword}
          label="Contraseña"
          type="password"
          name="password"
          placeholder="Escribe el password..."
          leyendaError="Entre 4 y 10 digitos esta bien 😜"
          expresionRegular={expresiones.password}
        />
            <Input
          estado={password2}
          setEstado={setPassword2}
          label="Repetir Contraseña"
          type="password"
          name="password2"
          placeholder="Escribe nuevamente el password..."
          leyendaError="Ambas contraseñas deben ser iguales"
          funcion={validarPasword2}
        />
        <Input
          estado={nombreEmprendimiento}
          setEstado={setNombreEmprendimiento}
          label="Nombre de su Emprendimiento..."
          type="text"
          name="nombreEmprendimiento"
          placeholder="Escribe aquí el nombre tu emprendimiento..."
          leyendaError="Entre 4 y 10 digitos esta bien 😜"
          expresionRegular={expresiones.nombre}
        />
    
        <Input
          estado={descripcion}
          setEstado={setDescripcion}
          label="Descripción de su Emprendimiento"
          type="text"
          name="descripcion"
          placeholder="Cuéntanos sobre tu emprendimiento..."
          leyendaError="Necesitamos que nos cuentes sobre tu emprendimeito "
          expresionRegular={expresiones.description}
        />
        <Input
          estado={pais}
          setEstado={setPais}
          label="País de residencia"
          type="text"
          name="pais"
          placeholder="Escribe tu país de residencia"
          leyendaError="Entre 4 y 10 digitos esta bien 😜"
          expresionRegular={expresiones.nombre}
        />
    
      
        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" checked={terminos} onChange={checkTerminos}/>
            Deseo recibir información 
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
          <Boton type="submit">Registrarme</Boton>
       {formValido===true &&  
       
         <MensajeExito>El Formulario se envio exitosamente!</MensajeExito>        
       
       }
        </ContenedorBtnEnvio>
      </FormLabel>
    </FormBody>
  );
}
export default Formulario;
