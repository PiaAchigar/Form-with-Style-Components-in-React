import React from "react";
import { Banner, Content, DivQueEs } from "../Elements/StylesPrincipal";
import {Link} from 'react-router-dom'
import imgFondo from '../Assets/images/bg-index.png'

const Principal = () => {
  return (
    
    <section>
     <Banner>
       <div>
          <img src={imgFondo}></img>
       </div>
      <Content>
        <h1> ¡Participa en<br/> el hold-up!</h1>
        <p>
        Explora la plataforma y ayuda a emprendedorxs a resolver retos de su proyecto a través de la inteligencia colectiva
        </p>
      </Content> 
      
     </Banner>

     <Link to="/form"> ir al form</Link>
     <Link to="/retos"> ir al Retis</Link>
     </section>
    
  );
};

export default Principal;
