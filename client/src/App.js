
import {BrowserRouter} from "react-router-dom";
import Router  from "./Router/router";
import RouterAdmin from './Router/routeradmin';





function App() {
  return(
    <BrowserRouter>
         <Router/>     
          <RouterAdmin/>
   
    </BrowserRouter>

    
  )
}

export default App;
