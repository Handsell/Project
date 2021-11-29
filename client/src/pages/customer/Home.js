import Banner from "../../component/main/Banner";
import Banner2 from "../../component/main/Banner2";
import Content_title from "../../component/main/Content_title";
import Top from "../../component/main/top";
import Footer from "../../component/main/Footer"
import React, {useState, useEffect} from "react";
import axios from "axios";
import Posts from "../../component/main/Content-list";
import Pagination from "../../component/main/Pagination";

function Home()
{
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] =useState(1);
  const [postsPerPage] = useState(8)

  useEffect(() =>{
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://fashionwebab.herokuapp.com/T_shirt');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);
    
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pagination = (pageNumber) => setCurrentPage(pageNumber);

    return(
    <div class="fullbody">
      <div id="main">
          <Top/>     
          <div className="container_home">
            <Banner/>
            <div id="content">
              <Content_title/>
              <Posts posts={currentPosts} loading={loading}/>
              <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} pagination={pagination}/>
            </div>
            <Banner2/>
          </div>
      </div>
      <Footer/>
    </div>
    )
}

export default Home;

