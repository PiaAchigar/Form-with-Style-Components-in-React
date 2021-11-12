import styled from "styled-components";
import {colores} from './StylesApp'

const Footer = styled.footer`
    height: 6rem;
    max-width:100vw;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${colores.lightblue};
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