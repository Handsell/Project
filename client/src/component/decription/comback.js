import React from 'react'

export default function Comback() {
    return (
      
        <div id="header">
            <ul id="header__nav">
                <li><a href="/">HOME</a></li>
               
            </ul>
            <div Name="button__icon--small">
                <div className="shopping-button">
                    <a href="#"><i class="fas fa-cart-arrow-down"></i></a>
                </div>
                
                <div className="user-button js-login">
                    <a href="#"><i class="fas fa-user"></i></a>
                </div>
            
                <div className="search">
                    <div id="icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Seach" id="mysearch"/>
                    </div>
                </div>
                    
            </div>
            {/* <!-- End: Button --> */}
        </div>
        
    )
}
