import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Rectangle 21.png";
const SignUp = () => {
  //declaring variables
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isCreating, setIsCreating] = useState("Sign Up");
  const [created, setCreated] = useState(null);
  let status;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCreating("Sign Up");
    setCreated(null);
    if (signUpValidate()) {
      setError(null);
      setIsCreating("Creating user, Please wait...");
      fetch("https://my-brand-aimelive.herokuapp.com/api/v1/users/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          phone: phone,
          password: password,
          confirmPassword: confirmPassword,
        }),
      })
        .then((response) => {
          status = response.status;
          return response.json();
        })
        .then((data) => {
          if (status === 201) {
            setCreated(data.Message);
            setIsCreating("User Created Successfully!!");
            window.location.href = "/login";
          }
          if (status === 400) {
            setError(data.Error);
            setIsCreating("Try Again");
          }
        })
        .catch((err) => {
          setError(
            "Error " +
              err.message +
              "! check your network connection and try again"
          );
          setIsCreating("Try Again");
        });
    }
  };
  const borderError = "border: 2px solid rgb(197, 20, 20)";
  const setBorderError = (inputField) => {
    inputField.setAttribute("style", borderError);
  };
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.removeAttribute("style");
    });
  });
  function signUpValidate() {
    const nameV2 = fullName.trim();

    // referincing to an html inputs
    const nameInput = document.querySelector("#fullName");
    const emailInput = document.querySelector("#userEmail");
    const phoneInput = document.querySelector("#userPhone");
    const pwdInput = document.querySelector("#userPassword");
    const confirmPwdInput = document.querySelector("#userConfirmPassword");

    if (nameV2 === "") {
      nameInput.focus();
      setBorderError(nameInput);
      setError("Name Required!!");
      return false;
    }
    if (nameV2.length < 5) {
      nameInput.focus();
      setError("Name: Enter at least 5 characters!!");
      setBorderError(nameInput);
      return false;
    }
    if (nameV2.split(" ").length < 2) {
      nameInput.focus();
      setError("Name: Both names required!");
      setBorderError(nameInput);
      return false;
    }
    const specialChars = /[0123456789`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(nameV2)) {
      nameInput.focus();
      setError("Name: Should not contain any number or special character!");
      setBorderError(nameInput);
      return false;
    }
    if (email === "") {
      emailInput.focus();
      setBorderError(emailInput);
      setError("Email is required!");
      return false;
    }

    if (
      email.indexOf("@") < 1 ||
      email.lastIndexOf(".") - email.indexOf("@") < 2
    ) {
      emailInput.focus();
      setBorderError(emailInput);
      setError("Invalid Email Format!");
      return false;
    }
    const niceEmail = /[`!#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/;
    if (niceEmail.test(email)) {
      emailInput.focus();
      setBorderError(emailInput);
      setError(
        "Invalid Email: should not contain any special character except @ _ ."
      );
      return false;
    }
    if (phone === "") {
      phoneInput.focus();
      setBorderError(phoneInput);
      setError("Phone Number required please!");
      return false;
    }
    if (password === "") {
      pwdInput.focus();
      setBorderError(pwdInput);
      setError("Password required!");
      return false;
    }

    if (password.length < 8 || password.length > 12) {
      pwdInput.focus();
      setBorderError(pwdInput);
      setError("Password should have at least 8 and not beyond 12 characters");
      return false;
    }
    if (confirmPassword === "") {
      confirmPwdInput.focus();
      setBorderError(confirmPwdInput);
      setError("Please confirm password!");
      return false;
    }
    if (password !== confirmPassword) {
      confirmPwdInput.focus();
      setBorderError(confirmPwdInput);
      setError("Password does not match!");
      return false;
    }

    return true;
  }
  const handleEye = () => {
    const inputType = document.querySelector(".password");
    inputType.focus();
    const eye = document.querySelector(".showPwd");
    if (inputType.getAttribute("type") === "password") {
      inputType.setAttribute("type", "text");
      eye.setAttribute("class", "fa fa-eye-slash showPwd");
    } else {
      inputType.setAttribute("type", "password");
      eye.setAttribute("class", "fa fa-eye showPwd");
    }
  };
  return (
    <div>
      <div className="login">
        <img src={logo} id="logo" width="80px" alt="my-logo" />
        <h2 id="animateHeading"> Hey Everyone, Welcome </h2>
        {error && (
          <div className="divErrorSignUp">
            <div>
              <i className="fa fa-warning"> </i> {error}
            </div>
          </div>
        )}
        {created && (
          <div className="userCreated">
            {created}
            Redirecting...
          </div>
        )}
        <form
          className="login_form"
          name="loginAdmin"
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
        >
          <label> Full Name </label> <br />
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            className="input"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <label> E - mail </label> <br />
          <input
            type="email"
            name="email"
            placeholder="Email your email"
            className="input"
            id="userEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label> Phone Number </label> <br />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone"
            className="input"
            id="userPhone"
            value={phone}
            onChange={(e) => {
              if (
                !/[abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(
                  e.target.value
                )
              ) {
                setPhone(e.target.value);
              }
            }}
            minLength={10}
            maxLength={12}
          />
          <br />
          <label id="errorPassword"> Password </label> <br />
          <div className="pass-word">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input password"
              id="userPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={12}
            />
            <i className="fa fa-eye showPwd" onClick={handleEye}></i>
          </div>
          <label id="errorPassword"> Confirm Password </label> <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="input"
            id="userConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            maxLength={password.length}
          />
          <br />
          <input
            type="submit"
            value={isCreating}
            placeholder="Email or Phone number"
            className="input submit"
          />
          <br />
        </form>
        <p>
          Already have an Account ? <Link to="/login"> Go to Login </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
