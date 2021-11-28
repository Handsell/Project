import React, {useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import TopProduct from './topprodcut';
import './manageproduct.css';
import Modal from 'react-modal';



export default class ManageProduct extends React.Component {

 

  state = {
    _id: '',
    persons: []
   
  }
  
  componentDidMount() {
    axios
      .get("https://fashionwebab.herokuapp.com/T_shirt")
      .then((res) => {
        const persons = res.data;
        
        this.setState({ persons });
        console.log(persons);
        
      })
      .catch((error) => console.log(error));
  }


 
  handleDelete = (id) => {
    axios.delete(`https://fashionwebab.herokuapp.com/T_shirt/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        
        window.location.reload();
      })
  };
  

  render() {
    return (
        <div id="main_mana">
            <TopProduct/>
            <div className="container_manage">
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
                                  <th scope="col">Link Img</th>                                                          
                                  <th scope="col">ACTIONS</th>                                
                              </tr>
                          </thead>
                    
                    {this.state.persons.map((post) => (                           
                        <tbody>
                            <tr key={post._id}>
                                <th scope="row">{post.Name}</th>
                                
                               
                                <td>{post.slug}</td>
                                <td>{post.Price}</td>
                                <td>{post.img} </td>
                                <td>
                                    <button className="manage_delete" 
                                    type="submit"
                                    onClick={()=>this.handleDelete(post._id)}
                                    >Delete</button>

                                    <Link to={`/UpdateProduct/${post._id}`}>      
                                    <button className="manage_update"
                                            
                                    >UPDATE</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    
                    ))}
                     
                    </table>
                    </form>
                </div>
            </div>
            
        </div>
    ) 
  }
}
  
  


 