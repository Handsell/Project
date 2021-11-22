import Banner from "../../component/main/Banner";
import Banner2 from "../../component/main/Banner2";
import Content_title from "../../component/main/Content_title";
import Top from "../../component/main/top";
import PersonList from "../../component/main/Content-list";
import Footer from "../../component/main/Footer"

function Home()
{
    return(
    <div class="fullbody">
      <div id="main">
          <Top/>     
          <div className="container_home">
            <Banner/>
            <div id="content">
              <Content_title/>
              <PersonList/>
            </div>
            <Banner2/>
          </div>
      </div>
      <Footer/>
    </div>
    )
}

export default Home;

