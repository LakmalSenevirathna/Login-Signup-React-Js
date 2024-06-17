import './Loginsignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Loginsignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
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
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" name="" id="" placeholder='Password' />
        </div>
      </div>
      <div className="forgot__password">Lost Password ? <span>Click Here</span></div>
      <div className="submit__container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default Loginsignup
