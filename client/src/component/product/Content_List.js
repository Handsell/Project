import React from "react";


import axios from "axios";


// ------------------------GET Requests------------------------------------
export default class Productlist extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get("https://ass4singment.herokuapp.com/products")
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        <div className="content__list">
          {this.state.persons.map((post) => (
            // <div style={{display:'grid', gridTemplateRows:'1fr 1fr',width:'100%'}}>
            <div className="content__Tshirt">
              <a href="/Decription">
                <img src="Img/t-shirt/Áo Thun Cổ Tròn Linh Vật Bbuff Ver1 .jpg" alt="Áo Thun Cổ Tròn Linh Vật Bbuff Ver1" />
                <div key={post.id}>
                  <h3>{post.name}</h3>
                  {/* <p>{post.type}</p> */}
                  <img src={post.type}></img>
                </div>
              </a>
            </div>

            // </div>
          ))}
        </div>
      </>
    );
  }
}

// export default class PersonList extends React.Component {
//   state = {
//     name: '',
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios.post(`https://ass4singment.herokuapp.com/products`, { products })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }
