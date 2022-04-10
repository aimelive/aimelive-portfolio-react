import { Link } from "react-router-dom";
import location from "../../images/location.png";
import profile from "../../images/Rectangle 21.png";
const HomePage = () => {
  return (
    <main className="homeContent">
      <div className="overview">
        <h5> FREELANCE DEVELOPER </h5>
        <h1>
          Hello, <br /> My name is <span> Aime NDAYAMBAJE </span>
        </h1>
        <div className="wlcmText">
          <p>
            Welcome here, I am a software developer with over 2 years of
            experience, if you need a <span> developer </span> for an awesome
            website you 're on a right way of reaching out to me.
          </p>
          <p className="blqText">
            "I am a <b>FULL STACK DEVELOPER </b>experienced in HTML&CSS, React
            JS, Node JS, Express JS, and Mongo DB. "
          </p>
        </div>
        <div className="homeBtns">
          <Link to="/" className="pro">
            Projects
          </Link>
          <Link to="/about" className="link">
            Skills
          </Link>
        </div>
      </div>
      <div className="profile">
        <img src={profile} width={200} alt="Profile_photo" />
        <div className="line"> </div>
        <div className="socialLinks">
          <a
            href="https://www.facebook.com/aimelive"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"> </i>
          </a>
          <a href="#">
            <i className="fa fa-whatsapp"> </i>
          </a>
          <a
            href="https://www.linkedin.com/in/aime-ndayambaje/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"> </i>
          </a>
          <a
            href="https://www.twitter.com/aimelive_1"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"> </i>
          </a>
          <a href="#">
            <i className="fa fa-slack"> </i>
          </a>
          <a
            href="https://github.com/aimelive"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"> </i>
          </a>
        </div>
        <img src={location} alt="Location Place" />
        <p>
          KG 452 ST <br /> Rwanda - Kigali City
        </p>
      </div>
    </main>
  );
};

export default HomePage;
