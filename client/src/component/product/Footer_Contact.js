import React from "react"

export default function Contact(){
    return(
        <div className="footer__contact">
            <div className="contact__title">
                <h4 className="information">CONTACT</h4>
            </div>
            <div className="contact__list">
                <a href="https://www.facebook.com" className="contact__link">Facebook</a>
                <a href="https://www.youtube.com/" className="contact__link">Youtube</a>
                <a href="https://www.instagram.com/" className="contact__link">Instagram</a>
                <a href="./index.html" className="contact__link">WebShop</a>
            </div>
        </div>
    )
}