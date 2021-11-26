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
    min-height: 11rem;
    margin: 0.5rem;
    border-radius: 5rem;
    background-color: ${(props) => props.Bgcolor};
    /* display: none; */
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-out;
  }
  &:hover {
    div {
      /* display: block; */
      animation: abrir 1s ease-out;
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
  /* :not(:hover) {
    animation: cerrar 1s ease-out;
  } */
  @keyframes abrir {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(5px);
    }
  }
  @keyframes cerrar {
    from {
      transform: translateY(5px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export { DivCiudadano };
