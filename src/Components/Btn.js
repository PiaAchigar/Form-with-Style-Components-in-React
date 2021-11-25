import React from "react";
import { DivCiudadano } from "../Elements/Stylebtn";

const Btn = ({ parrafo, persona, descripcion, bgcolor, color }) => {
  return (
    <DivCiudadano Bgcolor={bgcolor} Color={color}>
      <section>
        <p>{parrafo}</p>
        <h2>{persona}</h2>
      </section>
      <div>{descripcion}</div>
    </DivCiudadano>
  );
};

export default Btn;
