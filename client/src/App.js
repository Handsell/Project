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
import './assets/css/loginstyle.css'
import Register from "./component/login/register";



function App() {
  return(
    // <>
    // <div id="main">
    //     <Top/>     
    //     <div class="container">
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
    
    // <div class="overlay">
    //     {/* <!-- LOGN IN FORM by Omar Dsoky --> */}
    //     <form>
    //       <Login/>
    //       <Orther/>
    //     </form>
    // </div>
    <Register/>
     
  )
}

export default App;
