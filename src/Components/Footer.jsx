import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="FooterCards">
        <div className="card">
          <h4>
            <i className="fa fa-link" aria-hidden="true"></i> Quick Links{" "}
          </h4>
          <ul>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="card">
          <h4>
            <i className="fa fa-fire" aria-hidden="true"></i> Trending Now
          </h4>
          <ul>
            <li>
              <Link to="/blogs?query=motivations">Motivations</Link>
            </li>
            <li>
              <Link to="/blogs?query=careers">Careers</Link>
            </li>
            <li>
              <Link to="/blogs?query=personal blog">Personal blog </Link>
            </li>
            <li>
              <Link to="/blogs?query=team projects">Team Projects </Link>
            </li>
            <li>
              <Link to="/about">Skills & Languages </Link>
            </li>
          </ul>
        </div>
        <div className="card">
          <h4>
            <i className="fa fa-tasks" aria-hidden="true"></i> Recent Projects
          </h4>
          <ul>
            <li>
              <Link to="#">
                In 2022, Aimelive built Capstone Project about his portfolio
                webiste
              </Link>
            </li>
            <li>
              <Link to="#">
                In this summer will be working on Team Project with others
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aime-ndayambaje/"
                target="_blank"
              >
                Find more on LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrightFooter"> &copy; Aimelive 2022</div>
      <script
        src="https://app.respond.io/facebook/chat/plugin/83042/653321925173222"
        async
      ></script>
    </footer>
  );
};

export default Footer;
