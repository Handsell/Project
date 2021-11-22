import React from 'react'

export default function Register() {
    return (
        <div className="container_signup">
            <div className="form_signup">
                <h1>Sign Up</h1>
                <p>Please enter the form below to register.</p>
                <hr/>
                <label for="email"><b>Email</b></label>
                <input id="Email" type="text" placeholder="Enter Email" name="email" required/>
                <label for="psw"><b>Password</b></label>
                <input id="pw" type="password" placeholder="Enter Password" name="psw" required/>
                <label>
                    <input type="checkbox" name="remember" style={{marginBottom:'15px'}}/> Remember to login
                </label>
                <div className="clearfix">  
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
                <div className="return">
                    <a href="/Login">I am already member</a>
                </div>
            </div>            
        </div>
    )
}
