import React from "react"
import logo from '../../Img/logo/logo.png'
export default function Logo(){
    return(
        <div class="footer__logo">
            <div class="footer__logo-top">
                <a href="">
                    <img src={logo} alt=""/>
                </a>
            </div>
        </div>
    )
}