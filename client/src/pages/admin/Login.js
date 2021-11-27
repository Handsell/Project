import React,{useState} from 'react'
// import Login from "../../component/Login/login"
import axios from 'axios'
import { Link } from 'react-router-dom';




  
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.logout();

        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            submitted: false,
            Islogin: false
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
        this.setState({ Islogin: true });
        const { username, password } = this.state;
        if (username && password) {
            axios.post('https://fashionwebab.herokuapp.com/login', { username, password })
            .then(res => {
                console.log(res);
                console.log(res.data);
                
                localStorage.setItem('token',res.data.accessToken);
                alert('đăng nhập thành công');
                window.location.href = "/ManageProduct";
      })
            console.log(localStorage.getItem('token'));
        }           
        // console.log(username, password);  
        
    }

    
   

    handleShowHidePassword =() =>{
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="Container_login">                
                <div class="form_sign_in" >
                    <div className="con">
                        <header className="head-form">
                            
                            <h2>Login In</h2>
                            
                            <p>login here using your username and password</p>
                        </header>
            
                    <br/>
                        <form name="form" onSubmit={this.handleSubmit}>
                            
                            <div className={'form-group' + (submitted && !username ? ' has-error' : 'loi')}>
                                <i className="fa fa-user-circle"></i>
                                <label htmlFor="username">Username</label>           	
     							<input type="text" className="form-control" placeholder="@UserName" name="username" value={username} onChange={this.handleChange} required autofocus/>
                                
                            </div>
                          
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <i className="fa fa-key"></i>
                                <label htmlFor="text">Password</label>
                                <input type={this.state.isShowPassword ? 'text' : 'password'} 
                                className="form-control" 
                                placeholder="Password" 
                                name="password" 
                                value={password} 
                                onChange={this.handleChange} 
                                required autofocus />                               
                                <span onClick={() =>this.handleShowHidePassword()}>
                                <i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i>
                                </span>
                                
                            </div>
                            <div className="form-group orther">
                            <button type="submit" className="signinbtn">Login</button>
                                {/* {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                } */}
                                <p className="regist">Do not have an account?
                                        <Link to="/Register" > Sign Up  
					
                                {/* <!--         Sign Up font icon --> */}
                                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                                    
                                    
                                </Link>
                                </p>
                            </div>
                        </form>
                    </div>            
                </div>                 
            </div>
        );
    }
}

export default LoginPage;

// export default function LoginAdmin() {
//     return (
//     <div class="container_login">
//         {/* <!-- LOGN IN FORM by Omar Dsoky --> */}
        
//         <div class="form_sign_in" >
// 				<div className="con">
			
// 					<header className="head-form">
// 						<a href="/">
// 						<i class="fas fa-arrow-left"></i>
// 						</a>
// 						<h2>Login In</h2>
					
// 						<p>login here using your username and password</p>
// 					</header>
		
// 					<br/>
// 					<div className="field-set">
						
// 						{/* <!--   user name --> */}
// 							<span className="input-item">
// 							<i className="fa fa-user-circle"></i>
// 							</span>
// 							{/* <!--   user name Input--> */}
// 							<input className="form-input" id="txt-input" type="text" placeholder="@UserName" required/>
						
// 						<br/>
						
// 							{/* <!--   Password --> */}
						
// 						<span className="input-item">
// 							
// 						</span>
// 						{/* <!--   Password Input--> */}
// 						<input className="form-input" type="password" placeholder="Password" id="pwd"  name="password" required/>						
// 						<br/>
					
// 						<button className="log-in"> Sign In </button>
// 					</div>    
// 				</div>
// 				<div className="other">

// 				<a href="/Register">
					
// 					</a>
// 				{/* <!--      End Other the Division --> */}
// 				</div>
// 			</div>
       
//     </div>
//     )
// }


