import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


import Descrip from "../../component/decription/main"
import Comback from "../../component/decription/comback";
import Footer from "../../component/main/Footer";


import axios from 'axios';

const initialPost = {
  Name: "",
  slug: "",
  Price: "",
  img: "",
  username: "admin",
};

const Decription2 = () => {
 
    const { id } = useParams();
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

 
  return (

    <div class="main_decription">
        <Comback/>
        <div className="comeback">
            <div className="button_comeback" >
                <Link className="content__comeback" to="/">
                    <i className="fas fa-angle-left"></i>
                </Link>
                <b>   /   {post.Name}</b>
            </div>
        </div>
        <div class="main">
        <div class="boddy">
            <div class="image">
                <div class="slider">
                    <img src={post.img}/>
                </div>
                
            </div>
        </div>
        <div class="content">
            <div class="infoproduct">
                <h4>{post.Name}</h4>
                <div class="head">
                    <p>Chất liệu: <a href="#" id="clieu">Cotton Compact 4S</a></p>
                    <p>Mã số: {post.slug}</p>
                </div>
                <p id="money">{post.Price}.000 đ</p>
                <table>
                    <tbody>
                        <tr>
                            <td>S</td>
                            <td class="text-right mid">
                                <a href="#"><b>24</b> CH còn</a> 
                            </td>                                                      
                            <td class="text-right iconn"> 
                                <a href="#"> <i class="fas fa-plus-circle"></i> Chọn mua</a>
                            </td> 
                            
                        </tr>
                        <tr>
                            <td>M</td>
                            <td class="text-right mid">
                                <a href="#"><b>24</b> CH còn</a> 
                            </td>
                            <td class="text-right iconn"> 
                                <a href="#"> <i class="fas fa-plus-circle"></i> Chọn mua</a>
                            </td>  
                        </tr>
                        <tr>
                            <td>L</td>
                            <td class="text-right mid">
                                <a href="#"><b>24</b> CH còn</a> 
                            </td>
                            <td class="text-right iconn"> 
                                <a href="#"> <i class="fas fa-plus-circle"></i> Chọn mua</a>
                            </td>  
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td class="text-right mid">
                                <a href="#"><b>24</b> CH còn</a>   
                            </td>
                            <td class="text-right iconn">
                                 <a href="#"> <i class="fas fa-plus-circle"></i> Chọn mua</a>
                                </td>  
                        </tr>
                    </tbody>
                </table>
            </div>
            <Descrip/>
        </div>
         </div>  
            <Footer/>
    </div>
     );
}


export default Decription2;
