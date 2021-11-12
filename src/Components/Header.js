import React from 'react'
import {Header} from "../Elements/StyleHeader";
import {Link} from 'react-router-dom'
import LogoSrc from '../Assets/images/logo.png'

const HeaderElement = () => {
    return (
        <Header >
           <Link to='/'><img src={LogoSrc} alt='logo'></img></Link> 
        </Header>
    )
}

export default HeaderElement
