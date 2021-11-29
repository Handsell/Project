
import Home from "../pages/customer/Home";

import {Routes, Route} from "react-router-dom";
import Detail from "../pages/customer/decription";




function Router()
{
    return(

    <Routes>
        <Route path="/" exact element={<Home/>}/>   
        <Route path="/Decription" exact element={<Detail/>}/>                 
    </Routes>
    )
}

export default Router;