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
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !Name ? ' has-error' : '')}>
                                <label htmlFor="Name">Name</label>
                                <input type="text" className="form-control" name="Name" value={Name} onChange={this.handleChange} />
                                {submitted && !Name &&
                                    <div className="help-block">Name is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !slug ? ' has-error' : '')}>
                                <label htmlFor="slug">Slug</label>
                                <input type="slug" className="form-control" name="slug" value={slug} onChange={this.handleChange} />
                                {submitted && !slug &&
                                    <div className="help-block">Slug is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !Price ? ' has-error' : '')}>
                                <label htmlFor="Price">Price</label>
                                <input type="Price" className="form-control" name="Price" value={Price} onChange={this.handleChange} />
                                {submitted && !Price &&
                                    <div className="help-block">Price is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !img ? ' has-error' : '')}>
                                <label htmlFor="img">Image</label>
                                <input type="img" className="form-control" name="img" value={img} onChange={this.handleChange} />
                                {submitted && !img &&
                                    <div className="help-block">Image is required</div>
                                }
                            </div>                            
                            <div className="form-group orther_regist">
                            <button type="submit" className="signupbtn">CONFIRM</button>
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                
                            </div>
                        </form>
                    </div>
                    
                </div>
                <Footer/>
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
