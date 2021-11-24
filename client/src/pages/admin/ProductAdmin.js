import Footer from "../../component/main/Footer";
import Top from "../../component/main/top";
import Content_Move from "../../component/product/Content_Move";
import Productlist from "../../component/product/Content_List";


export default function ProductAdmin() {
    return (
    <div id="main">
        <Top/>
        <div id="content">
            <Content_Move/>
            <Productlist/>
        </div>
        <Footer/>
    </div>
    )
}
