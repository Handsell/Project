import React from "react"
import { Link } from 'react-router-dom';

export default function TopProduct(){
    return(
        <div className="top">
                <div id="header">
                    {/* <!-- Begin: Nav --> */}
                    <ul id="header__nav">
                        <li><Link to="/"> HOME </Link></li>
                        <li><Link to="/Product"> PRODUCT </Link></li>
                    </ul>
                    {/* <!-- End: Nav --> */}
                    {/* <!-- Begin: Button --> */}
                    <div className="button__icon--small">
                        <div className="shopping-button">
                            <Link to="/ManageProduct"><i className="fas fa-cart-arrow-down"></i></Link>
                        </div>
                                   
                        
                        <div className="user-button js-login">
                            <Link to="/Login"><i className="fas fa-user"></i></Link>
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
            </div> 
    )
}