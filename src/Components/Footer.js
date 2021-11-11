import React from 'react'
import {Footer} from "../Elements/StyleFooter";
import FbLogo from '../Assets/images/fb-logo.png'
import IgLogo from '../Assets/images/ig-logo.png'
import LiLogo from '../Assets/images/linked-in-logo.png'
import TwLogo from '../Assets/images/tw-logo.png'

const FooterElement = () => {
    return (
        <Footer >
            <div>
                
            <a href="https://www.facebook.com" target="_blank"><img src={FbLogo} alt='logo de facebook' rel="noreferrer"></img></a>
            <a href="https://www.twitter.com" target="_blank"><img src={TwLogo} alt='logo de twitter'rel="noreferrer"></img></a>
            <a href="https://www.instagram.com" target="_blank"><img src={IgLogo} alt='logo de instagram'rel="noreferrer"></img></a>
            <a href="https://www.linkedin.com" target="_blank"><img src={LiLogo} alt='logo de linked in' rel="noreferrer"></img></a>
            
            </div>
        </Footer>
    )
}

export default FooterElement
