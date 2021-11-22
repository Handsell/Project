import React from 'react'
import Login from '../../component/login/login'
import Orther from '../../component/login/orther'

export default function LoginAdmin() {
    return (
        <div className="container_login">
        {/* <!-- LOGN IN FORM by Omar Dsoky --> */}
        <form className="form_sign_up">
          <Login/>
          <Orther/>
        </form>
    </div>
    )
}
