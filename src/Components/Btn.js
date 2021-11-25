import React from "react";
import styled from "styled-components";

const DivCiudadano = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 26rem;
    height: 15rem;
    margin: 0.5rem;
    border-radius: 30rem;
    background-color: ${(props) => props.Bgcolor};
    p {
      margin: 0;
      color: white;
      font-size: 200%;
      font-weight: 600;
    }
    h2 {
      margin: 0;
      color: ${(props) => props.Color};
      font-size: 250%;
      font-weight: 700;
    }
  }
  div {
    text-align: center;
    padding: 1rem;
    color: white;
    font-size: 150%;
    font-weight: 600;
    width: 25rem;
    height: 11rem;
    margin: 0.5rem;
    border-radius: 5rem;
    background-color: ${(props) => props.Bgcolor};
    z-index: 99;
    display: none;
  }
  &:hover {
    div {
      display: block;
      transform: translateY(10px);
    }
  }
`;

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
