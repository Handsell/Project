import React from 'react'

export default function Comback() {
    return (
        <>
        <div id="header">
            {/* <!-- Begin: Nav --> */}
            <ul id="header__nav">
                <li><a href="/">HOME</a></li>
                <li><a href="/Product">PRODUCT</a></li>
            </ul>
            {/* <!-- End: Nav --> */}
            {/* <!-- Begin: Button --> */}
            <div Name="button__icon--small">
                <div className="shopping-button">
                    <a href="/ManageProduct"><i class="fas fa-cart-arrow-down"></i></a>
                </div>
                
                <div className="user-button js-login">
                    <a href="/Login"><i class="fas fa-user"></i></a>
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
        <div className="comeback">
            <div className="button_comeback" >
                <a className="content__comeback" href="/Product">
                    <i className="fas fa-angle-left"></i>
                </a>
                <b>   /   Áo Thun Cổ Tròn Linh Vật Bbuff Ver1</b>
            </div>
        </div>
    </>
    )
}
