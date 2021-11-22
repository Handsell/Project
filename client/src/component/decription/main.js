import React from 'react'

export default function Main() {
    return (
        <div className="main">
            <div className="boddy">
                <div className="image">
                    <div className="slider">
                        <img src="Img/t-shirt/Áo Thun Cổ Tròn Linh Vật Bbuff Ver1 .jpg" alt="shrit"/>
                    </div>
                    {/* <!-- <div class="slider1">
                        <img src="../../Img/t-shirt/Áo Thun Cổ Tròn  Ver1 người mẫu.jpg" alt="">
                    </div> --> */}
                </div>
            </div>
            <div className="content">
                <div className="infoproduct">
                    <h4>Áo Thun Cổ Tròn Linh Vật Bbuff Ver1</h4>
                    <div className="head">
                        <p>Chất liệu: <a href="#" id="clieu">Cotton Compact 4S</a></p>
                        <p>Mã số: 0020285</p>
                    </div>
                    <p id="money">225,000 đ</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tím, S</td>
                                <td className="text-right mid">
                                    <a href="#"><b>24</b> CH còn</a> 
                                </td>
                                <td className="text-right iconn">
                                    <ul className="note">
                                        <a href="#">
                                        <li>
                                            <ion-icon name="add-circle"></ion-icon>
                                            {/* <span>Thêm Đen Cam, S vào giỏ hàng</span>                           */}
                                        </li>
                                        <span>Chọn mua</span>
                                    </a>
                                    </ul>
                                </td>  
                            </tr>
                            <tr>
                                <td>Tím, M</td>
                                <td className="text-right mid">
                                    <a href="#"><b>24</b> CH còn</a> 
                                </td>
                                <td className="text-right iconn"> 
                                    <a href="#"><ion-icon name="add-circle"></ion-icon> Chọn mua</a>
                                </td>  
                            </tr>
                            <tr>
                                <td>Tím, L</td>
                                <td className="text-right mid">
                                    <a href="#"><b>24</b> CH còn</a> 
                                </td>
                                <td className="text-right iconn"> 
                                    <a href="#"><ion-icon name="add-circle"></ion-icon> Chọn mua</a>
                                </td>  
                            </tr>
                            <tr>
                                <td>Tím, XL</td>
                                <td className="text-right mid">
                                    <a href="#"><b>24</b> CH còn</a>   
                                </td>
                                <td className="text-right iconn">
                                    <a href="#"><ion-icon name="add-circle"></ion-icon> Chọn mua</a>
                                    </td>  
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="descriprion">
                    <h4>Mô tả sản phẩm</h4>
                    <div className="nd">
                        Chất liệu: Cotton 4 Chiều Tie Dye
                        <br/>
                        Thành phần: 92% cotton 8% spandex
                        <br/>
                        - Thân thiện
                        <br/>
                        - Thấm hút thoát ẩm
                        <br/>
                        - Mềm mại, ít nhăn
                        <br/>
                        - Co giãn tối ưu
                        <br/>
                        - Kiểm soát mùi
                        <br/>
                        - Điều hòa nhiệt
                        <br/>
                        + Họa tiết thêu 
                        <br/>
                        + may đắp logo
                        <br/>
                        - HDSD:
                        <br/>
                        + Nên giặt chung với sản phẩm cùng màu
                        <br/>
                        + Không dùng thuốc tẩy hoặc xà phòng có tính tẩy mạnh
                        <br/>
                        + Nên phơi trong bóng râm để giữ sp bền màu
                        <br/>
                    </div>
                </div>
            </div>
    </div>
    )
}
