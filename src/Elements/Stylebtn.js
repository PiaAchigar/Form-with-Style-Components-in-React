import styled from "styled-components";

const DivPersona = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 9rem;
    height: 3rem;
    margin-right: 0.5rem;
    padding: 0;
    border-radius: 30rem;
    background-color: ${(props) => props.Bgcolor};
    p {
      margin: 0;
      color: white;
      font-size: 60%;
      font-weight: 600;
    }
    h2 {
      margin: 0;
      color: ${(props) => props.Color};
      font-size: 90%;
      font-weight: 700;
    }
    @media (min-width: 425px) {
      width: 11.5rem;
      height: 7rem;
      p {
        font-size: 80%;
      }
      h2 {
        font-size: 110%;
      }
    }
    @media (min-width: 768px) {
      width: 15rem;
      height: 9rem;
      p {
        font-size: 100%;
      }
      h2 {
        font-size: 150%;
      }
    }
  }
  div {
    text-align: center;
    padding: 0.8rem;
    color: white;
    font-size: 80%;
    font-weight: 600;
    width: 7rem;
    min-height: 8rem;
    margin: 0.1rem;
    border-radius: 2rem;
    background-color: ${(props) => props.Bgcolor};
    /* display: none; */
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-out;
    @media (min-width: 425px) {
      width: 9rem;
    }
    @media (min-width: 768px) {
      width: 15rem;
    }
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

export { DivPersona };
