import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TopProduct from "./manageproduct/topprodcut";
import './Update.css';
import axios from 'axios';


const initialPost = {
  Name: "",
  slug: "",
  Price: "",
  img: "",
  username: "admin",
};






const Update = () => {
 

    const { id } = useParams();

    console.log(id);

  const getOnePost = async() =>{
    try{
      return await axios.get(`https://fashionwebab.herokuapp.com/T_shirt/${id}`);
    }
    catch (error){
        console.log(error);
    }
}

  

  const [post, setPost] = useState(initialPost);
  console.log(post);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getOnePost(id);
      setPost(data.data);
    };
    fetchData();
  }, [id]);

  const updatePost = (id, params) =>{
    
    return axios.put(`https://fashionwebab.herokuapp.com/T_shirt/${id}`, params)

  }

  const updateBlogPost = async () => {
    await updatePost(id, post);
    setTimeout(()=>{window.location.href='/ManageProduct'});
  };


  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (

    <div className="container-update">
        <TopProduct/>
        
        <div className="form-update">  
       
                 
      <h2>Edit Product</h2>  
        <table className="table-update">  
        
            <tbody>
              
                <tr className="content-update">
                    <th><label>Name</label></th>
                    <td>
                        <input
                        value={post.Name}
                        name="Name"
                        className="textfield"
                        onChange={(e) => handleChange(e)}
                        />
                    </td>
                </tr>
                <tr className="content-update">
                    <th><label>Slug</label></th>
                    <td>
                        <input
                        value={post.slug}
                        name="slug"
                        className="textfield"
                        onChange={(e) => handleChange(e)}
                        />
                    </td>
                </tr>
                <tr className="content-update">
                    <th><label>Price</label></th>
                    <td>
                        <input
                        value={post.Price}
                        name="Price"
                        className="textfield"
                        onChange={(e) => handleChange(e)}
                        />
                    </td>
                </tr>
                <tr className="content-update">
                    <th><label>Link Image</label></th>
                    <td>
                        <input
                        value={post.img}
                        name="img"
                        className="textfield"
                        onChange={(e) => handleChange(e)}
                        />
                    </td>
                </tr>
           
            </tbody>
            <div className="class-button">
              <div>
              <p onClick={updateBlogPost}
              className="update-button"
               variant="contained"
               color="primary"
              >
                Update
             </p>
              </div>
              <div className="link-cancel">
              <Link to="/ManageProduct" style={{ textDecoration: 'none' }}>Cancel</Link>
              </div>
            
           
        </div>
        </table>
          
        </div>     
    </div>
     );
}


export default Update;