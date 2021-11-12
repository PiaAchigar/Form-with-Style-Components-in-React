import styled from "styled-components";
import { colores } from "../StylesApp";

const FeedCard = styled.div`

width:90%;
height:25rem;
background-color:${colores.cardblue};
margin: 3rem 0;
padding: 1.5rem;
border-radius: 30px;
display:flex;
flex-direction:column;
align-items:center;
`
const CardTop = styled.div`
display:flex;
height: 30%;
width:95%;
color: ${colores.darkblue};
div{
    width:30%;
    display:flex;
    align-items:center;
    jusfity-content:center;
    
    img{
        width:80%;
        border-radius:30px;
    }
}
    section{
        width:70%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        
    h4{
        font-size: 1.4rem;
        margin:0;
    }
    p{
        font-size:0.8rem;
        margin:0;
    }
}
`
const CardDesc = styled.div`
display:flex;
height: 50%;
width:95%;
font-size: 1.3rem;
line-height: 1.5rem;
color: ${colores.darkblue};
p{
    width:90%;
    margin:auto;
}
`
const CardBottom = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
height: 30%;
width:95%;

a{
    color:${colores.orange};
    font-weight:600;
}
a:nth-child(2){
   button{
    font-size:16px;
    cursor:pointer;
    color:${colores.orange};
    font-weight:600;
    background-color: ${colores.lightblue};
    border:none;
    height:4rem;
    width: 12rem;
    border-radius:40px;
    span{
        color: white;
    }
    }
}
`

export {FeedCard, CardTop, CardDesc, CardBottom};