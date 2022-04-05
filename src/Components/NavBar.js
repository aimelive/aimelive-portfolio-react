import Logo from "../images/Rectangle 21.png";
import { NavLink } from "react-router-dom";
import swal from "sweetalert"


let token = localStorage.getItem('token')
let status = "Login"
const NavBar = () => {
  let gotoLogin = "/login"

  if (token) {
    fetch('https://my-brand-aimelive.herokuapp.com/api/v1/users//info/user', {
      headers: {
        "Authorization": token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
      })

  }

  const handleLoginRef = () => {
    if (token) {
      swal({
        title: 'Log out',
        text: 'Are you sure do you want to log out?',
        icon: 'warning',
        buttons: {
          cancel: "Not sure",
          Sure: true
        }
      }).then((deleteToken) => {
        if (deleteToken) {
          localStorage.removeItem('token')
          window.location.reload()
        }


      })
    }
    else {
      window.location.href = "/login"
    }
  }
  if (token) {
    status = "Logout"
    gotoLogin = handleLoginRef
  }
  const goHome = () => {
    window.location.href = "/"
  }
  const handleClick = () => {
    const menu = document.querySelector(".mobileMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
    menu.addEventListener("click", (e) => {
      menu.style.display = "none";
    });
  };
  return (
    <div>
      <nav className="headerNav">
        <div className="Logo" onClick={goHome}>
          <img src={Logo} alt="Aimelive Logo" />
          <span> Aimelive</span>
        </div>
        <div className="humberg" onClick={handleClick}>
          <svg
            width="30px"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to={gotoLogin} className="login" onClick={handleLoginRef}>
                {status}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mobileMenu">
        <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/blogs">Blog</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          <NavLink to={gotoLogin} onClick={handleLoginRef}>{status}</NavLink>

        </nav>
      </div>

    </div>
  );
};

export default NavBar;
