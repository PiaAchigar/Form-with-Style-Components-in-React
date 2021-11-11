import styled from "styled-components";

const Header = styled.header`
    height: 7rem;
    width:100vw;
    display:flex;
    align-items: center;
    img{
      width: 20%;
      position:relative;
      left: 3rem;      
    }
    @media (max-width:800px){
      img{
        width:35%
      }
    }
`;

export {Header};