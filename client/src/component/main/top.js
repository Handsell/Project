import React from "react"
import '../../assets/css/T_shirt.css'
import '../../assets/css/image.css'
// import '../../assets/css/search'

export default function top(){
    return(
        <div className="top">
            <div id="header">
                {/* <!-- Begin: Nav --> */}
                <ul id="header__nav">
                    <li><a href="./index.html">HOME</a></li>
                    <li><a href="./T_shirt.html">PRODUCT</a></li>
                </ul>
                {/* <!-- End: Nav --> */}
                {/* <!-- Begin: Button --> */}
                <div className="button__icon--small">
                    <div className="shopping-button">
                        <a href="./manage.html"><i className="fas fa-cart-arrow-down"></i></a>
                    </div>
                    <div className="search">
                        <div className="icon"></div>
                        <div className="input">
                            <input type="text" placeholder="Seach" id="mysearch"/>
                        </div>
                        <span className="clear" onclick="document.getElementById('mysearch').value = ''"></span>  
                    </div>             
                    
                    <div className="user-button js-login">
                        <a href="./login/login.html"><i className="fas fa-user"></i></a>
                    </div>
                </div>
                {/* <!-- End: Button --> */}
    
            </div>
        </div> 
    )
}