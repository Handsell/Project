import React from 'react'
import Footer from '../../component/main/Footer'
import Top from '../../component/main/top'


export default function InsertProduct() {
    return (
        <div id="main">
            <Top/>
        <div className="container_insert">
            <div className="con-insert">
                    <h1>CREATE NEW PRODUCT</h1>
                
                    <div className="input-group flex-nowrap">
                       
                        <input type="text" className="form-control" placeholder="NAME" />
                    </div>
                    <div className="input-group flex-nowrap">
                        
                        <input type="text" className="form-control" placeholder="MÃ SỐ" />
                    </div>
                    <div className="input-group flex-nowrap">
                        
                        <input type="text" className="form-control" placeholder="PRICE" />
                    </div>
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="IMG" />
                    </div>
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="DESCRIPTIONS" />
                    </div>                  
            </div>
            <div className="button-create">
                <button type="submit" className="btn btn-cancle">CONFIRM</button>
                <button type="submit" className="btn btn-confirm">CANCLE</button>  
            </div>
        </div>
        <Footer/>
        </div>
    )
}
