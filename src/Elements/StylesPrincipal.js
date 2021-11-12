import styled from "styled-components";
import {colores} from './StylesForms'
import imgFondo from '../Assets/images/bg-index.png'
const Banner = styled.section`
 max-width: 100vw;
    div{
        width:100%;
        img{
            width:100%;
        }
    }
    `

const Content = styled.section`
    position: absolute;
    top:17%;
    left:6vw;
    width:50vw;
    color: ${colores.darkblue};
    h1{
        font-weight: 800;
        font-size: 5rem;
        margin-bottom:0;
    }
    p{
        font-size: 2rem;
        font-weight: 600;
    }

`
export { Banner, Content };
