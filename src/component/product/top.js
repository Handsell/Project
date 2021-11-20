import React from 'react'

export default function top() {
    return (
        <div class="top">
            <div id="header">
                {/* <!-- Begin: Nav --> */}
                <ul id="header__nav">
                    <li><a href="./index.html">HOME</a></li>
                    <li><a href="./T_shirt.html">PRODUCT</a></li>
                </ul>
                {/* <!-- End: Nav --> */}
                {/* <!-- Begin: Button --> */}
                <div class="button__icon--small">
                    <div class="shopping-button">
                        <a href="./manage.html"><i class="fas fa-cart-arrow-down"></i></a>
                    </div>
                    <div class="search">
                        <div class="icon"></div>
                        <div class="input">
                            <input type="text" placeholder="Seach" id="mysearch"/>
                        </div>
                        <span class="clear" onclick="document.getElementById('mysearch').value = ''"></span>  
                    </div> 
                    <div class="user-button js-login">
                        <a href="./login/login.html"><i class="fas fa-user"></i></a>
                    </div>
                </div>
                {/* <!-- End: Button --> */}
            </div>
        </div>
        
    )
}
