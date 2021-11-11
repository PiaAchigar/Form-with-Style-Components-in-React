import React from 'react'
import {Header} from "../Elements/StyleHeader";
import LogoSrc from '../Assets/images/logo.png'

const HeaderElement = () => {
    return (
        <Header >
            <img src={LogoSrc} alt='logo'></img>
        </Header>
    )
}

export default HeaderElement
