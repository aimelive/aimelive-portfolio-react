import { Link } from "react-router-dom";
import profile from "../../images/2M8A4010.jpg";
import subPhoto from "../../images/subscribe-newsletter-icon-30-removebg-preview.png";
import pic1 from "../../images/198807056_1350758038653763_5653275032777728992_n.jpg";
import pic2 from "../../images/A13A0004copy.jpg";
import pic3 from "../../images/rwanda-kagame.jpeg";
import { useState } from "react";

const RightCol = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState("Subscribe")
  const [isDone, setIsDone] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    setIsDone(false)
    setIsPending("Subscribe")
    setError(null)
    if (validate()) {
      setIsPending("Sending...")
      fetch('https://my-brand-aimelive.herokuapp.com/api/v1/subscriptions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      })
        .then((resp) => {
          if (resp.status === 201) {
            setIsPending("Subscribed")
            setError(null)
            setName('')
            setEmail('')
            setIsDone(true)
            return resp.json()
          }
          if (resp.status === 409) {
            setIsDone(false)
            setIsPending("Try Again")
            setError("Subscription Already Exists! ")
          }
          if (resp.status === 400) {
            setIsDone(false)
            setIsPending("Try Again")
            setError("Bad Request! Invalid Inputs")
          }
        })
        .catch((e) => {
          setError("Failed to Subscribe! Check your Internet Connection")
          setIsPending("Try Again")
        })
    }
  }
  function validate() {
    if (name === "") {
      setError("Name Required!")
      return false
    }
    if (name.length < 5) {
      setError("Name: Enter at least 5 characters!")
      return false;
    }
    if (email === "") {
      setError("Email is required!")
      return false;
    }

    if (email.indexOf("@") < 1 || (email.lastIndexOf(".") - email.indexOf("@") < 2)) {
      setError("Invalid Email Format!")
      return false;

    }
    return true;
  }
  return (
    <div>
      <div className="rightcolumn">
        <div className="card">
          <h2>About Me</h2>
          <img src={profile} className="cardimg" alt="Profile_photo" />
          <p>
            Freelance Developer - Web Specialist - IT Proffesional - Software
            Management
          </p>
        </div>
        <div className="card">
          <h3>Popular Post</h3>
          <div className="insideCard">
            <img src={pic1} className="cardimg" alt="image_profile" />
            <p>
              Did you know? Aimelive hustled for a while in media journalism
              industry
            </p>
            <Link to="" className="readMore2">
              {" "}
              Read More..
            </Link>
          </div>

          <div className="insideCard">
            <img src={pic3} className="cardimg" alt="image_profile" />
            <p>
              Another man standing, H.E is my first role model who motivates me
            </p>
            <Link to="" className="readMore2">
              {" "}
              Read More..
            </Link>
          </div>
        </div>

        <div className="card gallery">
          <h2>Gallery</h2>
          <img src={pic2} className="cardimg" alt="Profile_photo" />
          <Link to="" className="viewMore">
            {" "}
            View More..
          </Link>
        </div>
        <div className="newsletter card">
          <div className="main-block">
            <h1> Stay in touch</h1>
            <form
              method="post"
              name="signupNewsletter"
              className="subscriptionForm"
              onSubmit={handleSubmit}
            >
              <center>
                <img src={subPhoto} width="20%" alt="myphoto" />
              </center>
              {error && <div className="errorSubSpan"><span><i className="fa fa-warning"></i> {error} </span></div>}
              {isDone && <div className="thxSub"><i className="fa fa-check-circle"></i> Thanks for subscribing!! </div>}
              <div className="info">
                <div className="info-item">
                  <label className="icon">
                    <i className="fa fa-user"></i>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="info-item2">
                  <label className="icon">
                    <i className="fa fa-envelope"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="subscribeButton">
                {isPending}
              </button>
            </form>
          </div>
        </div>
        <div className="card follow">
          <h3>Follow Me</h3>
          <div className="socialLinks">
            <Link to="/">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-whatsapp"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-slack"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCol;
