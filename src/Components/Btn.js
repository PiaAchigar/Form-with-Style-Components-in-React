import React from "react";
import { DivPersona } from "../Elements/Stylebtn";

const Btn = ({ parrafo, persona, descripcion, bgcolor, color }) => {
  return (
    <DivPersona Bgcolor={bgcolor} Color={color}>
      <section>
        <p>{parrafo}</p>
        <h2>{persona}</h2>
      </section>
      <div>{descripcion}</div>
    </DivPersona>
  );
};

export default Btn;
