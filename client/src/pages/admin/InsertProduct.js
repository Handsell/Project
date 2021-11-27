import React from 'react'
import Footer from '../../component/main/Footer'
import Top from '../../component/main/top'
import axios from 'axios';
import { Link } from 'react-router-dom';



class InsertProductPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.logout();

        this.state = {
            Name: '',
            slug: '',
            Price: '',
            img: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { Name, slug, Price, img } = this.state;
        if (Name && slug && Price && img) {
            axios.post('https://fashionwebab.herokuapp.com/T_shirt/create', { Name, slug, Price, img })
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload();
                
            })
    }
}


    render() {
        const { loggingIn } = this.props;
        const { Name, slug, Price, img, submitted } = this.state;
        return (
            
            <div id="main">
                <Top/>
                <div className="container_insert">
                    <div className="con-insert">
                            <h1>CREATE NEW PRODUCT</h1>
                        <form name="form-name" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !Name ? ' has-error' : '')}>
                                <label htmlFor="Name">Name</label>
                                <input type="text" className="form-control insert_sp" name="Name" value={Name} onChange={this.handleChange} required autofocus />
                                {submitted && !Name &&
                                    <div className="help-block">Name is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !slug ? ' has-error' : '')}>
                                <label htmlFor="slug">Slug</label>
                                <input type="slug" className="form-control insert_sp" name="slug" value={slug} onChange={this.handleChange} required autofocus/>
                                {submitted && !slug &&
                                    <div className="help-block">Slug is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !Price ? ' has-error' : '')}>
                                <label htmlFor="Price">Price</label>
                                <input type="Price" className="form-control insert_sp" name="Price" value={Price} onChange={this.handleChange} required autofocus/>
                                {submitted && !Price &&
                                    <div className="help-block">Price is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !img ? ' has-error' : '')}>
                                <label htmlFor="img">Image</label>
                                
                                <input type="img" className="form-control insert_sp" name="img" value={img} onChange={this.handleChange} required autofocus/>
                                {submitted && !img &&
                                    <div className="help-block">Image is required</div>
                                }
                            </div>                            
                            <div className="form-group orther_regist cancleprudct">
                                <button type="submit" className="insertbtn">CONFIRM</button>
                                <Link to="/ManageProduct">
                                <button className="insertbtn1">CANCLE</button>    
                                </Link>    
                            </div>
                        </form>
                    </div>
                    
                </div>
               
            </div>
                
            
        );
    }
}

export default InsertProductPage;





// export default function InsertProduct() {
//     return (
//         <div id="main">
//             <Top/>
//         <div className="container_insert">
//             <div className="con-insert">
//                     <h1>CREATE NEW PRODUCT</h1>
                
//                     <div className="input-group flex-nowrap">
                       
//                         <input type="text" className="form-control" placeholder="NAME" />
//                     </div>
//                     <div className="input-group flex-nowrap">
                        
//                         <input type="text" className="form-control" placeholder="MÃ SỐ" />
//                     </div>
//                     <div className="input-group flex-nowrap">
                        
//                         <input type="text" className="form-control" placeholder="PRICE" />
//                     </div>
//                     <div className="input-group flex-nowrap">
//                         <input type="text" className="form-control" placeholder="IMG" />
//                     </div>
//                     <div className="input-group flex-nowrap">
//                         <input type="text" className="form-control" placeholder="DESCRIPTIONS" />
//                     </div>                  
//             </div>
//             <div className="button-create">
//                 <button type="submit" className="btn btn-cancle">CONFIRM</button>
//                 <button type="submit" className="btn btn-confirm">CANCLE</button>  
//             </div>
//         </div>
//         <Footer/>
//         </div>
//     )
// }
