
import {BrowserRouter} from "react-router-dom";
import Router  from "./Router/router";
import RouterAdmin from './Router/routeradmin';




function App() {
  return(
    <BrowserRouter>
         <Router/>     
          <RouterAdmin/>
    </BrowserRouter>


    // <Register/>
    //-------------------HOME---------------------------------
    
     
    //login--------------------------------------
    
//---------------------------------------------------------------------------------------------------
// product
    


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
