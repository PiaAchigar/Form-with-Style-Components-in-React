import React from 'react'
import { Link } from 'react-router-dom'
import { CardTop ,CardDesc, CardBottom } from '../../Elements/retos/StylesFeedCard'

const FeedCardComp = (props) => {
    

    return (
        <>
            <CardTop>
                <div>
                    <img src={props.img} ></img>
                </div>
                <section>
                    <h4>{props.titulo}</h4>
                    <p>{props.posted}</p>
                   
                </section>
            </CardTop>
            <CardDesc>
                <p>{props.desc}</p>
            </CardDesc>
            <CardBottom>
                <Link to={props.url}>Seguir Leyendo  </Link>
                <Link to="/retos"><button><span>Dar </span>solución</button></Link>
            </CardBottom>
        </>
    )
}

export default FeedCardComp
