//import Form from "./Components/Form/Form";
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

function App() {
  return (
    <main>
      <Form action="">
        <Input
          label="Usuario"
          type="text"
          name="nombre"
          placeholder="Nombre..."
          leyendaError="Debe de colocar letras mayusculas y/o minusculas de 4 a 16 caracteres 😜"
          expresionRegular=""
        />
        <Input
          label="Contraseña"
          type="password"
          name="password"
          placeholder="Escribe tu password..."
          leyendaError="Entre 4 y 10 digitos esta bien 😜"
          expresionRegular=""
        />
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
      </Form>
    </main>
  );
}
export default App;
