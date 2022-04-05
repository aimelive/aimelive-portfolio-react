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
              <Link to="/blogs">Motivations</Link>
            </li>
            <li>
              <Link to="/about">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Personal blog </Link>
            </li>
            <li>
              <Link to="/contact">Travels </Link>
            </li>
            <li>
              <Link to="/contact">Skills & Languages </Link>
            </li>
          </ul>
        </div>
        <div className="card">
          <h4>
            <i className="fa fa-tasks" aria-hidden="true"></i> Recent Projects{" "}
          </h4>
          <ul>
            <li>
              <Link to="/blogs">
                In 2022, Aimelive built Capstone Project about his portfolio
                webiste{" "}
              </Link>
            </li>
            <li>
              <Link to="/about">
                In this summer will be working on Tesm Project with others
              </Link>
            </li>
            <li>
              <Link to="/contact">Find more on LinkedIn</Link>
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
