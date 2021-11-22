import React from 'react'
// import '../../assets/css/register.css'

export default function Register() {
    return (
        <>
        <form className="form_signup" action="" >
        <div className="container_signup">
            <h1>Form Đăng Ký</h1>
            <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
            <hr/>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Nhập Email" name="email" required/>
            <label for="psw"><b>Mật Khẩu</b></label>
            <input type="password" placeholder="Nhập Mật Khẩu" name="psw" required/>
            <label for="psw-repeat"><b>Nhập Lại Mật Khẩu</b></label>
            <input type="password" placeholder="Nhập Lại Mật Khẩu" name="psw-repeat" required/>
            <label>
                <input type="checkbox" name="remember" style={{marginBottom:'15px'}}/> Nhớ Đăng Nhập
            </label>
            <div className="clearfix">  
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
        </div>
        </form>
        <div className="return">
        <a href="./login.html">I am already member</a>
        </div>
    </>
    )
}
