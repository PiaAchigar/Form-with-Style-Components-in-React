import styled from "styled-components";
import { colores } from "../StylesApp";

const Botonera = styled.section`
margin-top:8rem;
height: 5rem;
display:flex;
justify-content:flex-end;

div{
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    width:50%;
  
   
    a, a:visited{ 
        color: ${colores.lightblue};
        font-weight:800;
       
    span{
        color:${colores.orange};
    }}

    div{
        background-color: ${colores.lightblue};
        height: 4rem;
        width: 12rem;
        border-radius: 40px;
        a, a:visited{
            color:white;
        }
    }
}

`
const Vista = styled.section`
 display:flex;
 
`

export {Botonera,Vista};