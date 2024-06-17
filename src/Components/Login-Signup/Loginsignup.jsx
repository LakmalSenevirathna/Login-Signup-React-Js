import './Loginsignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useState } from 'react'

const Loginsignup = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name="" id="" placeholder='Name' />
        </div>
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" name="" id=""  placeholder='Email'/>
        </div>
        {action==="Sign Up"?
        <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" name="" id="" placeholder='Password' />
        </div>:
        <div></div>}
        
      </div>
      {action==="Login"?
      <div className="forgot__password">Lost Password ? <span>Click Here</span></div>
      :<div></div>}
      <div className="submit__container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() => setAction("Login")}>Login</div>
      </div>
    </div>
  )
}

export default Loginsignup
