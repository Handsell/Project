import React from "react";
import Ver1 from "../../Img/t-shirt/Áo Thun Cổ Tròn Linh Vật Bbuff Ver1 .jpg";

import axios from "axios";

export default class PersonList extends React.Component {
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
              <a href="./decription/T-shirt/T_shirt1.html">
                <img src={Ver1} alt="Áo Thun Cổ Tròn Linh Vật Bbuff Ver1" />
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
