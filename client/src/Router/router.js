import Detail from "../pages/customer/decription";
import Home from "../pages/customer/Home";
import Product from "../pages/customer/Product"
import {Routes, Route} from "react-router-dom";

import Register from "../component/register/register";
import LoginPage from "../pages/admin/Login";
import InsertProduct from "../pages/admin/InsertProduct";
import ManageProduct from "../pages/admin/manageproduct/ManageProduct";


function Router()
{
    return(
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Product" element={<Product />}/>
        <Route path="/Decription" element={<Detail />}/>
      
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/ManageProduct" element={<ManageProduct/>}/>
        <Route path="/InsertProduct" element={<InsertProduct/>}/>
    </Routes>
    )
}

export default Router;