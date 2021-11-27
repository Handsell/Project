
import Home from "../pages/customer/Home";

import {Routes, Route} from "react-router-dom";




function Router()
{
    return(

    <Routes>
        <Route path="/" exact element={<Home/>}/>                    
    </Routes>
    )
}

export default Router;