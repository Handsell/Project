import React from "react";
import { Link } from "react-router-dom";



const Posts =({ posts, loading }) => {
  if(loading) {
    return <h2>Loading....</h2>;
  }

  return (
      <div className="content__list">
        {posts.map( posts => (
          <div className="content__Tshirt">
            <Link to={`/Decription/${posts._id}`}>             
                <img src={posts.img}></img>           
            </Link>
          
          </div>
        ))}
      </div> 
  )
};

export default Posts;

