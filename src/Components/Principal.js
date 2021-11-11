import React from "react";
import { Nav, DivContainer, DivQueEs } from "../Elements/StylesPrincipal";

const Principal = () => {
  return (
    <div>
      <Nav>
        <p>¡Te damos la Bienvenida al HOLD_UP!</p>
      </Nav>
      <DivContainer>
        <DivQueEs>
          <p>¿Que es Hold_up?</p>
        </DivQueEs>
        <div>Comienza ahora</div>
      </DivContainer>

      <footer>redes</footer>
    </div>
  );
};

export default Principal;
