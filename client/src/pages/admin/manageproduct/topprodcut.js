import React from "react"
import { Link, useNavigate } from 'react-router-dom';



export default function TopProduct(){
   const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("token");
        navigate("/Login");
    }

    return(
        <div className="top">
                
                <div id="header">
         
                 
                    <ul id="header__nav">
                        <li><Link to="/"> HOME </Link></li>
                       
                    </ul>
                  
                  
                    <div className="button__icon--small">
                        <div className="shopping-button">
                            <Link to="/ManageProduct"><i className="fas fa-cart-arrow-down"></i></Link>
                        </div>
                                   
                        
                        <div className="user-button js-login" >
                            <button onClick={logout}>LogOut</button>
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
                   
                  
                </div>
                
            </div> 
    )
}