import Detail from "../pages/customer/decription";
import Home from "../pages/customer/Home";
import Product from "../pages/customer/Product"
import {Routes, Route} from "react-router-dom";
import LoginAdmin from "../pages/admin/Login";
import Register from "../component/register/register";


function Router()
{
    return(
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Product" element={<Product />}/>
        <Route path="/Decription" element={<Detail />}/>
        <Route path="/Login" element={<LoginAdmin />}/>
        <Route path="/Register" element={<Register />}/>

    </Routes>
    )
}

export default Router;