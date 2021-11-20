import React from "react"
import Banne from "../../Img/logo/BANNER.jpg"
export default function Banner2(){
    return(
        <div id="banner">
            <div className="Cont__img" data-aos="zoom-in">
                <div className="col-12 text-center mb-2 px-0">
                    <img src={Banne}  style={{margin:'auto', width:'100%'}}/>
                </div>
            </div>
        </div>
    )
}