import Detail from "../pages/customer/decription";


import {Routes, Route } from "react-router-dom";
import Register from "../component/register/register";
import LoginPage from "../pages/admin/Login";
import InsertProduct from "../pages/admin/InsertProduct";
import ManageProduct from "../pages/admin/manageproduct/ManageProduct";
import UpdateProduct from "../pages/admin/Updateproduct";
import PrivateRoute from "./admin";


function RouterAdmin()
{
   console.log(localStorage.getItem('token'));
    return(   
    <Routes>
        <Route
        path="/ManageProduct"
        element={
          <PrivateRoute>
            <ManageProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/ManageProduct"
        element={
          <PrivateRoute>
            <ManageProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/InsertProduct"
        element={
          <PrivateRoute>
            <InsertProduct />
          </PrivateRoute>
        }
      />
        

        <Route path="/Decription" element={<Detail />}/>
        <Route path="/UpdateProduct" element={<UpdateProduct />}/>       
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Register" element={<Register/>}/>
        
       
    </Routes>
    )
}

export default RouterAdmin;



