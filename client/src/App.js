
import Login from "./component/login/login";
import Orther from "./component/login/orther";
import Banner from "./component/main/Banner";
import Banner2 from "./component/main/Banner2";
import PersonList from "./component/main/Content-list";
import Content_title from "./component/main/Content_title";

import Top from "./component/main/top"
import Productlist from "./component/product/Content_List";
import Content_Move from "./component/product/Content_Move";
import About from "./component/product/Footer_About";
import Contact from "./component/product/Footer_Contact";
import Logo from "./component/product/Footer_Logo";
import TOP from "./component/product/Top";
import Register from "./component/register/register"; 
import {BrowserRouter} from "react-router-dom";
import Router  from "./Router/router";



function App() {
  return(
    <BrowserRouter>
        <Router/>         
    </BrowserRouter>
    //-------------------HOME---------------------------------
    

    //login--------------------------------------
    // <div className="container_login">
    //     {/* <!-- LOGN IN FORM by Omar Dsoky --> */}
    //     <form className="form_sign_up">
    //       <Login/>
    //       <Orther/>
    //     </form>
    // </div>
//---------------------------------------------------------------------------------------------------
// product
    // <div id="main">
    //   <TOP/>
    //   <div id="content">
    //     <Content_Move/>
    //     <Productlist/>
    //   </div>
    //   <div id="footer__home">
    //     <Logo/>
    //     <About/>
    //     <Contact/>
    //   </div>
    // </div>


    //---------------------register-----------------------
    
        // <Register/>

    //---------------------decrition------------------
    // <div class="main_decription">
    //   <Header/>
    //   <Comback/>
    //   <Main/>
    //   <div id="footer__home">
    //     <Footer_logo/>
    //     <Footer_About/>
    //     <Footer_Contact/>
    //   </div>
    // </div>
      
  )
}

export default App;
