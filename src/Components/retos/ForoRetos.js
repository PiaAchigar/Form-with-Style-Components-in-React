import React from 'react'
import { TituloRetos } from '../../Elements/retos/StylesForoRetos'

const ForoRetos = () => {
    return (
        <>
           <TituloRetos>
               <h1>Foro de <span>retos</span></h1>
               <p>¡Prepárate para generar impacto junto con emprendedores 
                   socio-ambientales! <span>Bienvenidx al hold-up</span>
                </p>

                <ol>
                    <li><span>Explora los retos disponibles</span></li>
                    <li><span>Escoge el emprendimiento que te gustaría apoyar para resolver su reto y da click </span></li>
                    <li><span>¡Comienza tu colaboración de cocreación! </span></li>
                    <li><span>Asiste a los próximo talleres creativos en vivo para resolverretos de emprendedores aquí</span></li>
                </ol>
           </TituloRetos>
        </>
    )
}

export default ForoRetos
