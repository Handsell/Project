import React from 'react'

import Footer from '../../../component/main/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TopProduct from './topprodcut'
import './manageproduct.css'



export default class PersonList extends React.Component {
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
                                <th scope="row">1</th>
                                <td>{post.Name}</td>
                               
                               
                                <td>{post.slug}</td>
                                <td>{post.Price}</td>
                                <td>
                                     <button className="manage_delete" type="submit">Delete</button>
                                          
                                    <button className="manage_update">UPDATE</button>
                                </td>
                            </tr>
                        </tbody>
                    
                    ))}
                    
                    </table>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    ) 
  }
}
  
  


           // <label>
          //  Person ID:
          //  <input type="text" name="" onChange={this.handleChange} />
         // </label>
        //  <button type="submit">Delete</button>
      //  </form>
    //  </div> 
  //  )
 // }
 //}



// export default function ManageAdmin() {
//     return (
//     <>
//         <div id="main">
//             <Top/>     
//             <div className="container_manage">
//                 <div className="con_manage">
//                     <h2>MANAGE PRODUCTS</h2>
//                     <a id="Add" href="/InsertProduct"><i class="fas fa-plus"></i></a>
//                     <table className="table table-dark table-striped">
//                         <thead>
//                             <tr>
//                                 <th scope="col">#</th>
//                                 <th scope="col">NAME</th>
//                                 <th scope="col">MÃ SỐ</th>
//                                 <th scope="col">PRICE</th>
//                                 <th scope="col">IMG</th>
//                                 <th scope="col">DESCRIPTIONS</th>
//                                 <th scope="col">ACTIONS</th>                                
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <th scope="row">1</th>
//                                 <td>Mark</td>
//                                 <td>Otto</td>
//                                 <td>@mdo</td>
//                                 <td>@mdo</td>
//                                 <td>@mdo</td>
//                                 <td>
//                                     <a href="" className="btn btn-secondary">DELETE</a>
//                                     <a href="" className="btn btn-secondary">UPDATE</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Jacob</td>
//                                 <td>Thornton</td>
//                                 <td>@fat</td>
//                                 <td>@fat</td>
//                                 <td>@fat</td>
//                                 <td>
//                                     <a href="" className="btn btn-secondary">DELETE</a>
//                                     <a href="" className="btn btn-secondary">UPDATE</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">3</th>
//                                 <td>Jacob</td>
//                                 <td>Thornton</td>
//                                 <td>@fat</td>
//                                 <td>@fat</td>
//                                 <td>@fat</td>
//                                 <td>
//                                     <a href="" className="btn btn-secondary">DELETE</a>
//                                     <a href="" className="btn btn-secondary">UPDATE</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">4</th>
//                                 <td>Mark</td>
//                                 <td>Otto</td>
//                                 <td>@mdo</td>
//                                 <td>@mdo</td>
//                                 <td>@mdo</td>
//                                 <td>
//                                     <a href="" className="btn btn-secondary">DELETE</a>
//                                     <a href="" className="btn btn-secondary">UPDATE</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">5</th>
//                                 <td>Mark</td>
//                                 <td>Otto</td>
//                                 <td>@mdo</td>
//                                 <td>@mdo</td>
//                                 <td>@mdo</td>
//                                 <td>
//                                     <a href="" className="btn btn-secondary">DELETE</a>
//                                     <a href="" className="btn btn-secondary">UPDATE</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">6</th>
//                                 <td>Mark</td>
//                                 <td>Otto</td>
//                                 <td>@mdo</td>
//                                 <td>@mdo</td>
//                                 <td>@mdo</td>
//                                 <td>
//                                     <a href="" className="btn btn-secondary">DELETE</a>
//                                     <a href="" className="btn btn-secondary">UPDATE</a>
//                                 </td>
//                             </tr>                          
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//         {/* <!--Begin: Footer--> */}
//         <Footer/>
//     </>
//     )
// }