import { Link } from "react-router-dom";
import location from "../../images/location.png";
import profile from "../../images/Rectangle 21.png";
const HomePage = () => {
  document.title = "Aimelive - Home Page";
  return (
    <div>
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
            <Link to="/blogs" className="link">
              Skills
            </Link>
          </div>
        </div>
        <div className="profile">
          <img src={profile} width={200} alt="Profile_photo" />
          <div className="line"> </div>
          <div className="socialLinks">
            <Link to="/">
              <i className="fa fa-facebook"> </i>
            </Link>
            <Link to="/">
              <i className="fa fa-whatsapp"> </i>
            </Link>
            <Link to="/">
              <i className="fa fa-linkedin"> </i>
            </Link>
            <Link to="/">
              <i className="fa fa-twitter"> </i>
            </Link>
            <Link to="/">
              <i className="fa fa-slack"> </i>
            </Link>
            <Link to="/">
              <i className="fa fa-github"> </i>
            </Link>
          </div>
          <img src={location} alt="Location Place" />
          <p>
            KG 452 ST <br /> Rwanda - Kigali City
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
