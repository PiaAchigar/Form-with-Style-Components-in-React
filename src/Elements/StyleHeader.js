import styled from "styled-components";

const Header = styled.header`
    height: 7rem;
    width:99%;
    display:flex;
    align-items: center;
    position:absolute;
    z-index:1;
    top:0;
    
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