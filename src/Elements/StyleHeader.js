import styled from "styled-components";

const Header = styled.header`
    height: 7rem;
    mawx-width:100vw;
    display:flex;
    align-items: center;
    img{
      width: 15%;
      position:relative;
      left: 8%;      
    }
    @media (max-width:800px){
      img{
        width:35%
      }
    }
`;

export {Header};