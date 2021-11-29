import Detail from "../pages/customer/decription";
import {Routes, Route } from "react-router-dom";
import Register from "../component/register/register";
import LoginPage from "../pages/admin/Login";
import Decription2 from "../pages/customer/decription";
import InsertProduct from "../pages/admin/InsertProduct";
import PrivateRoute from "./admin";
import Update from '../pages/admin/Updateproduct';
import Mana from "../pages/mana";


function RouterAdmin()
{
   console.log(localStorage.getItem('token'));
    return(   
    <Routes>
        <Route
        path="/ManageProduct"
        element={
          <PrivateRoute>
            <Mana />
          </PrivateRoute>
        }
      />
      <Route
        path="/UpdateProduct"
        element={
          <PrivateRoute>
            <Update/>
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
        <Route path="/UpdateProduct/:id" element={<Update />}/>       
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Decription/:id" element={<Decription2 />}/> 
        
       
    </Routes>
    )
}

export default RouterAdmin;



