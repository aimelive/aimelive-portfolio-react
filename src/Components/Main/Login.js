import { useState } from "react";
import logo from "../../images/Rectangle 21.png"
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [wait, setWait] = useState("Sign in")
  const [fails, setFails] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setWait("Loading...")
    setFails(null)
    setSuccess(null)
    fetch('https://my-brand-aimelive.herokuapp.com/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: pwd
      })
    })
      .then((response) => {

        if (response.status === 404) {
          setFails("User not found!")
          setWait("Sign in")
        }
        if (response.status === 403) {
          setFails("Incorrect password!")
          setWait("Sign in")
        }

        if (response.status === 500) {
          setFails("Unknown error occured!")
          setWait("Sign in")
        }
        if (response.status === 200) {
          return response.json();
        }

      })
      .then((data) => {

        setSuccess(data.Message)
        setWait("Redirecting...")
        localStorage.setItem('token', 'Bearer ' + data.Token)
        if (data.Role === 'admin') {
          window.location.href = '/dashboard'
        }
        if (data.Role === 'user') {
          window.location.href = './blogs'

        }

      })


  }

  const handleEye = () => {
    const inputType = document.querySelector(".password")
    inputType.focus()
    const eye = document.querySelector(".showPwd")
    if (inputType.getAttribute("type") === "password") {
      inputType.setAttribute("type", "text")
      eye.setAttribute("class", "fa fa-eye-slash showPwd")
    }
    else {
      inputType.setAttribute("type", "password")
      eye.setAttribute("class", "fa fa-eye showPwd")
    }

  }

  return (
    <div>
      <div className="login">
        <img src={logo} id="logo" width="80px" alt="my-logo" />
        <h2 id="animateHeading">Hey Everyone, Welcome</h2>
        {fails && <div className="divError">Oops! <span>{fails}</span></div>}
        {success && <div className="divSuccess"> {success} Redirecting... </div>}
        <form className="login_form" name="loginAdmin"
          onSubmit={handleSubmit}>
          <label id="errorEmail">E-mail  </label><br />
          <input type="email" name="email"
            placeholder="Email or Phone number"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)} minLength="5" />
          <br />
          <label id="errorPassword">Password </label><br />
          <div className="pass-word">
            <input type="password" name="password"
              placeholder="Enter Password"
              className="input password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              minLength="8"
              required />
            <i className="fa fa-eye showPwd" onClick={handleEye}></i>
          </div>
          <input type="submit" value={wait} placeholder="Email or Phone number" className="input submit" /><br />

        </form>
        <p>Don't have an Account? <Link to="/signup">Sign Up Now</Link></p>
      </div>
    </div>
  );
};

export default Login;
