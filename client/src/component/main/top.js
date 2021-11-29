import React from "react"
import { Link } from 'react-router-dom';

export default function Top(){
    return(
        <div className="top">
                <div id="header">
                    {/* <!-- Begin: Nav --> */}
                    <ul id="header__nav">
                        <li><Link to="/"> HOME </Link></li>
                        
                    </ul>
                    {/* <!-- End: Nav --> */}
                    {/* <!-- Begin: Button --> */}
                    <div className="button__icon--small">
                        <div className="shopping-button">
                            <a href="#"><i className="fas fa-cart-arrow-down"></i></a>
                        </div>
                                   
                        
                        <div className="user-button js-login">
                            <a href="#"><i className="fas fa-user"></i></a>
                        </div>
 
                    </div>
                    {/* <!-- End: Button --> */}
        
                </div>
            </div> 
    )
}