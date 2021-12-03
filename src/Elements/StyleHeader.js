import styled from "styled-components";

const Header = styled.header`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  position: absolute;
  top: 10;
  z-index: 1;
  height: 1rem;
  /*  */
  /* display:flex;
    align-items: center; */
  /*  */
  /* a{ position:relative;
      left: 8%;  */
  img {
    position: absolute;
    left: 0.5rem;
    width: 5rem;
  }

  @media (min-width: 768px) {
    img {
      width: 10rem;
    }
  }
  @media (min-width: 1024px) {
    img {
      width: 12rem;
    }
  }
`;

export { Header };
