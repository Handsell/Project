import React from 'react'
  

export default function Login(){
        return (
            <div className="con">
           {/* <!--     Start  header Content  --> */}
			   <header className="head-form">
				   <a href="/">
			   <i class="fas fa-arrow-left"></i>
			   </a>
				  <h2>Login In</h2>
				  {/* <!--     A welcome message or an explanation of the login form --> */}
				  <p>login here using your username and password</p>
			   </header>
			   {/* <!--     End  header Content  --> */}
			   <br/>
			   <div className="field-set">
				 
				  {/* <!--   user name --> */}
					 <span className="input-item">
					   <i className="fa fa-user-circle"></i>
					 </span>
					{/* <!--   user name Input--> */}
					 <input className="form-input" id="txt-input" type="text" placeholder="@UserName" required/>
				 
				  <br/>
				 
					   {/* <!--   Password --> */}
				 
				  <span className="input-item">
					<i className="fa fa-key"></i>
				   </span>
				  {/* <!--   Password Input--> */}
				  <input className="form-input" type="password" placeholder="Password" id="pwd"  name="password" required/>
				 
			
				 
				 
				  <br/>
			{/* <!-- buttons --> */}
			{/* <!--button LogIn --> */}
				  <button className="log-in"> Sign In </button>
				</div>    
			</div>
        )
    }

