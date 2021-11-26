import Footer from "../../component/main/Footer";
import Top from "../../component/main/top";
import Content_Move from "../../component/product/Content_Move";
import Productlist from "../../component/product/Content_List";


export default function Product() {
    return (
    <div id="main_product">
        <Top/>
        <div id="content">
            <Content_Move/>
            <Productlist/>
        </div>
        <Footer/>
    </div>
    )
}
