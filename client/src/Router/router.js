import Detail from "../pages/decription";
import Home from "../pages/Home";
import {Routes, Route} from "react-router-dom";

function Router()
{
    return(
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/111" element={<Detail />}/>
    </Routes>
    )
}

export default Router;