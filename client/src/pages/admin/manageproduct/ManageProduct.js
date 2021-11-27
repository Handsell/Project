import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TopProduct from './topprodcut';
import './manageproduct.css';
import Modal from 'react-modal';



export default class ManageProduct extends React.Component {
  state = {
    slug: '',
    persons: [],
   
  }
  
  componentDidMount() {
    axios
      .get("https://fashionwebab.herokuapp.com/T_shirt")
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch((error) => console.log(error));
  }

  handleChange = event => {
    this.setState({ slug: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://fashionwebab.herokuapp.com/T_shirt/create/${this.state.slug}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        
        window.location.reload();
      })
    
  }
  

  render() {
    return (
        <div id="main_mana">
            <TopProduct/>
            <div className="container_manage">
                <div className="con_manage">
                    <h2>MANAGE PRODUCTS</h2>
                    <a id="Add" href="/InsertProduct"><i class="fas fa-plus"></i></a>
                    <form onSubmit={this.handleSubmit}>
                    <table className="table table-dark table-striped">
                   
                      <thead>
                              <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Slug</th>
                                  <th scope="col">PRICE</th>                                                            
                                  <th scope="col">ACTIONS</th>                                
                              </tr>
                          </thead>
                    
                    {this.state.persons.map((post) => (                           
                        <tbody>
                            <tr>
                                <th scope="row">{post._id}</th>
                                <td>{post.Name}</td>
                               
                               
                                <td>{post.slug}</td>
                                <td>{post.Price}</td>
                                <td>
                                    <button className="manage_delete" type="submit">Delete</button>
                                    <Link to="/UpdateProduct">      
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
  
  


 