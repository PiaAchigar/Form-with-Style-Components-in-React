import styled from "styled-components";
import { colores } from "../StylesApp";

const ForoView = styled.section`
width: 70vw;
display:flex;
flex-direction:column;
align-items:center;
`
const TituloRetos = styled.div`
padding: 0 1rem;

    h1{
        margin:0;
        font-size:4rem;
        color: ${colores.darkblue};
        span{
            color:${colores.orange};
        }
    }
    p{  font-weight:700;
        color: ${colores.darkblue};
        line-height:2rem;
        span{
            color:${colores.orange};
        }
    }
    ol{
        li{
            color:${colores.orange};
            line-height:1.8rem;
            span{
                color: ${colores.darkblue};

            }
        }
    }
`
export {ForoView, TituloRetos};