import Login from "./component/login/login";
import Orther from "./component/login/orther";
import Banner from "./component/main/Banner";
import Banner2 from "./component/main/Banner2";
import PersonList from "./component/main/Content-list";
import Content_title from "./component/main/Content_title";
import Footer_About from "./component/main/footer-about";
import Footer_Contact from "./component/main/footer-contact";
import Footer_logo from "./component/main/footer-logo";
import Top from "./component/main/top"
import Productlist from "./component/product/Content_List";
import Content_Move from "./component/product/Content_Move";
import About from "./component/product/Footer_About";
import Contact from "./component/product/Footer_Contact";
import Logo from "./component/product/Footer_Logo";
import TOP from "./component/product/Top";
import Register from "./component/register/register"; 
import './assets/css/loginstyle.css'



function App() {
  return(
    //-------------------HOME---------------------------------
    // <>
    // <div id="main">
    //     <Top/>     
    //     <div className="container">
    //       <Banner/>
    //       <div id="content">
    //         <Content_title/>
    //         <PersonList/>
    //       </div>
    //       <Banner2/>
    //     </div>
    // </div>
    // <div id="footer">
    //   <Footer_logo/>
    //   <Footer_About/>
    //   <Footer_Contact/>
    // </div>
    // </>

    //login--------------------------------------
    <div className="overlay">
        {/* <!-- LOGN IN FORM by Omar Dsoky --> */}
        <form className="form_sign_up">
          <Login/>
          <Orther/>
        </form>
    </div>
//---------------------------------------------------------------------------------------------------
// product
    // <div id="main">
    //   <TOP/>
    //   <div id="content">
    //   <Content_Move/>
    //   <Productlist/>
    //   </div>
    //   <div id="footer">
    //   <Logo/>
    //   <About/>
    //   <Contact/>
    //   </div>
    // </div>


    //---------------------register-----------------------
    
      // <Register/>
    
     
  )
}

export default App;
