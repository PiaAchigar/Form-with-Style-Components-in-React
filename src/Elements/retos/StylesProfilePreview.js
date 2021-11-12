import styled from "styled-components";
import { colores } from "../StylesApp";

const ProfilePreview = styled.div`
width:30vw;
height: 60vh;
display:flex;
justify-content:center;
color: ${colores.lightblue};
div{
    width:80%;
    height:100%;    
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
        p{
            margin:20px 0; 
        }
        div{    
            display:flex;          
            justify-content:center;
            img{
                width:100%;
                border-radius:40px;               
            }
        }
        button{
            width:8rem;       
            background-color: ${colores.lightblue};
            color:white;
            border-radius:40px;
            border:none;
        }

}
`


export {ProfilePreview};