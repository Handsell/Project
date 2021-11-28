import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import axios from 'axios';


const initialPost = {
  Name: "",
  slug: "",
  Price: "",
  img: "",
  username: "admin",
};






const Update = () => {
 
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const getOnePost = async(id) =>{
    try{
      return await axios.get(`https://fashionwebab.herokuapp.com/T_shirt/${id}`);
    }
    catch (error){
        console.log(error);
    }
}

  const { id } = useParams();

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
    return axios.put(`https://fashionwebab.herokuapp.com/T_shirt/${id}`, {params})
}

  const updateBlogPost = async () => {
    setLoading(true);
    setNotify({
      isOpen: true,
      message: "Create Successfully",
      type: "success",
    });
    await updatePost(id, post);
    setLoading(false);
    setTimeout(() => {
      navigation("/Login");
    });
  };


  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (

    <div className="container">
        <h2>Add an item</h2>
        <form notify={notify} setNotify={setNotify}>           
        <table>
            
            <tbody>
                <tr className="content">
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
                <tr className="content">
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
                <tr className="content">
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
                <tr className="content">
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
            <button
                onClick={() => updateBlogPost()}
                xs={{ marginTop: "10px" }}
                variant="contained"
                color="primary"
                //   endIcon={
                //     loading && <ReactBootStrap.Spinner animation="border" size="sm" />
                //   }
                >
                Update
            </button>
        </table>
          </form>
    </div>
     );
}


export default Update;