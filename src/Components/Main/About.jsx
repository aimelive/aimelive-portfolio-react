import profile from "../../images/259876262_273615128057795_12441334990616548_n.jpg";
import { Link } from "react-router-dom";
import locate from "../../images/location.png";
const About = () => {
  document.title = "Aimelive - About Page";
  return (
    <div>
      <div className="aboutRow">
        <div className="profileCard">
          <img src={profile} alt="profile" />
          <div>
            <h3>Freelance Developer</h3>
            <p>Aime Ndayambaje</p>
          </div>
        </div>
        <div className="middle">
          <div className="address">
            <img src={locate} alt="location" />
            <p>
              KG 452 ST <br /> Rwanda - Kigali City{" "}
            </p>
          </div>
          <div className="line"></div>
          <div className="links">
            <Link to="/" className="fa fa-facebook"></Link>
            <Link to="/" className="fa fa-whatsapp"></Link>
            <Link to="/" className="fa fa-linkedin"></Link>
            <Link to="/" className="fa fa-twitter"></Link>
            <Link to="/" className="fa fa-slack"></Link>
            <Link to="/" className="fa fa-github"></Link>
          </div>
          <div className="aboutme">
            <p>
              Aime Ndayambaje attended 9 months ATLP trainings, where he sharped
              his web development skills.
            </p>
            <div className="h2">
              {" "}
              <h2>About me </h2>
            </div>

            <p className="bio">
              Experienced Co-Founder with a demonstrated history of working in
              the online media industry. Skilled in Communication, Influencer
              Marketing, Video Journalism, Presentation Skills, and Media
              Relations. Strong business development professional with an A2
              focused in Mathematics-Economics-Computer Science from E.S MARIE
              ADELAIDE GIHARA.
            </p>
          </div>

          <div className="hire">
            <button className="goto">Download CV</button>
            <button className="goto">Hire Me</button>
          </div>
        </div>
        <div className="rightCol">
          <div className="rightCard">
            <p>Profession Skills</p>
            <ol>
              <li>
                <Link to="/">HTML5 & CSS </Link>
                <span>( 98 % )</span>
              </li>
              <li>
                <Link to="/">React & Angular JS </Link>
                <span>( 60 % )</span>
              </li>
              <li>
                <Link to="/">Tailwind & Bootstrap </Link>
                <span>( 73 % )</span>
              </li>
              <li>
                <Link to="/">Java & C++ </Link>
                <span>( 45 % )</span>
              </li>
              <li>
                <Link to="/">Laravel PHP </Link>
                <span>( 23 % )</span>{" "}
              </li>
              <li>
                <Link to="/">UI/UX </Link>
                <span>( 90 % )</span>
              </li>
            </ol>
          </div>
          <div className="rightCard">
            <p>Experience</p>
            <ol>
              <li>
                <Link to="/">Web specialist </Link> <span>( +2 )</span>
              </li>
              <li>
                <Link to="/">IT Proffesional </Link>
                <span>( +1 )</span>
              </li>
              <li>
                <Link to="/">Hardware Technician </Link>
                <span>( +1 )</span>
              </li>
              <li>
                <Link to="/">Software Developer </Link>
                <span>( +3 )</span>
              </li>
              <li>
                <Link to="/">Journalist Presenter </Link>
                <span>( +5 )</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
