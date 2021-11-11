import styled from "styled-components";
import {colores} from './StylesForms'

const Footer = styled.footer`
    height: 6rem;
    width:100vw;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${colores.fondo};
    div{
        width:50%;
        display:flex;
        justify-content: space-evenly;
        align-items:center;
    img{
      width: 3.2rem;         
    }
}
    @media (max-width:800px){
        
        div{
            width:100%;
        }
    
}   
`;

export {Footer};