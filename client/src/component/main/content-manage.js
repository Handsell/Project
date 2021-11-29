import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";




const Contentmanage =({posts, loading}) => {
  if(loading) {
    return <h2>Loading....</h2>;
  }


  const handleDelete = (id) => {
    axios.delete(`https://fashionwebab.herokuapp.com/T_shirt/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

      })
            setTimeout(()=>{window.location.reload(); },2000);   
    };
    
  return (
    <div className="con_manage">
    <h2>MANAGE PRODUCTS</h2>
    <a id="Add" href="/InsertProduct"><i class="fas fa-plus"></i></a>
    <form >
    <table className="table table-dark table-striped">
   
      <thead>
              <tr>
                  
                  <th scope="col">Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">PRICE</th>                                                                           
                  <th scope="col">ACTIONS</th>                                
              </tr>
          </thead>
    
          {posts.map( (item) => (
                              
        <tbody>
            <tr>
                <td className="name-product">{item.Name}</td>
                
               
                <td>{item.slug}</td>
                <td>{item.Price}</td>
               
                <td className="button_u_d">
                    <p className="manage_delete" 
                    type="submit"
                    onClick={() => handleDelete(item._id)}
                    >Delete</p>
                    <Link to={`/UpdateProduct/${item._id}`} style={{ textDecoration: 'none' }}>      
                    <p className="manage_update"
                            
                    >Update</p>
                    </Link>
                </td>
            </tr>
        </tbody>
    
    ))}
     
    </table>
    </form>
</div>
     
  )
};

export default Contentmanage;




