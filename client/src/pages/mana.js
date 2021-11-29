import React, {useState, useEffect} from "react";
import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
import TopProduct from './admin/manageproduct/topprodcut';
import Contentmanage from '../component/main/content-manage';
import Pagination from '../component/main/Pagination';
import './admin/manageproduct/manageproduct.css'



function Mana() 
{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] =useState(1);
    const [postsPerPage] = useState(6)
  
    useEffect(() =>{
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://fashionwebab.herokuapp.com/T_shirt');
          setPosts(res.data);
          setLoading(false);
        }
        fetchPosts();
      }, []);

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pagination = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div id="main_mana">
            <TopProduct/>
            <div className="container_manage">
                <Contentmanage posts={currentPosts} loading={loading} />
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} pagination={pagination}/>
            </div>       
        </div>
    ) 
  }

  
  

export default React.memo(Mana);
 