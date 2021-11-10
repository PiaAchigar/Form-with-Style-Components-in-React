//import Form from "./Components/Form/Form";
import { useState } from "react";
import {
  Form,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
} from "./Elements/Forms";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
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
    <main>
      <Form action="">
        <div>
          <Label htmlFor="nombre">_usuario</Label>
          <GrupoInput>
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre del representante del emprendimiento"
              value={user.nombre}
              onChange={handleChange}
              id="nombre"
            />
            <IconoValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>
            Se espera una o varias palabras de no mas de 16 caracteres, letras,
            mayusculas y minusculas
          </LeyendaError>
        </div>
        <div>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto los terminos y condiciónes
          </Label>
        </div>
        <div>
          <Label htmlFor="">_usuario</Label>
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={user.apellido}
            onChange={handleChange}
          />
          <IconoValidacion icon={faCheckCircle} />
          <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
        <div>
          <Label htmlFor="">_usuario</Label>
          <input
            type="text"
            name="nameEmprendimiento"
            placeholder="Nombre del Emprendimiento"
            value={user.nameEmprendimiento}
            onChange={handleChange}
          />
          <IconoValidacion icon={faCheckCircle} />
          <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
        <div>
          <Label htmlFor="">_usuario</Label>
          <input
            type="text"
            name="mail"
            placeholder="example@gmail.com"
            value={user.email}
            onChange={handleChange}
          />
          <IconoValidacion icon={faCheckCircle} />
          <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
        <div>
          <Label htmlFor="">_usuario</Label>
          <input
            type="text"
            name="pass"
            placeholder="Passward"
            value={user.pass}
            onChange={handleChange}
          />
          <IconoValidacion icon={faCheckCircle} />
          <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
        <div>
          <Label htmlFor="">_usuario</Label>
          <input
            type="text"
            name="pais"
            placeholder="País de residencia"
            value={user.pais}
            onChange={handleChange}
          />
          <IconoValidacion icon={faCheckCircle} />
          <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
        <div>
          <Label htmlFor="">_emprendimiento</Label>
          <input
            type="text"
            name="description"
            placeholder="Descripción del Emprendimiento"
            value={user.description}
            onChange={handleChange}
          />
          <IconoValidacion icon={faCheckCircle} />
          <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
        <div>
          <Label htmlFor="">_emprendimiento</Label>
          <input
            type="text"
            name="files"
            placeholder="Suba su logo o imagen"
            value={user.files}
            onChange={handleChange}
          />
          <IconoValidacion icon={faCheckCircle} />
          <p>Lorem ipsum dolor sit amet, consectet</p>
        </div>
      </Form>
    </main>
  );
}
export default App;
