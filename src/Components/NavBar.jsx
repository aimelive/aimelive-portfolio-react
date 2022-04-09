import Logo from "../images/Rectangle 21.png";
import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../Contexts/getUserInfo";
import swal from "sweetalert";

const NavBar = () => {
  const user = useContext(UserContext);

  const goHome = () => {
    window.location.href = "/";
  };

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

  const handleDropDown = () => {
    const div = document.querySelector(".dropdown");
    if (div.style.display === "block") {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  };
  const handleLogout = () => {
    swal({
      title: "Log out",
      text: "Are you sure you want to log out?",
      icon: "warning",
      buttons: {
        cancel: "Not sure",
        Sure: true,
      },
    }).then((deleteToken) => {
      if (deleteToken) {
        localStorage.removeItem("token");
        window.location.reload();
      }
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
            {user && (
              <li>
                <div className="avatar" onClick={handleDropDown} id="avatar256">
                  <h1>{user.Data.name.charAt()}</h1>
                </div>

                <div className="dropdown" id="dropdown256">
                  <Link to="#">
                    <i className="fa fa-user"> </i>
                    {user.Data.name}
                  </Link>
                  {user.Data.role === "admin" ? (
                    <Link to="/dashboard">
                      <i className="fa fa-dashboard"></i>Dashboard
                    </Link>
                  ) : (
                    ""
                  )}
                  <Link to="#">
                    <i className="fa fa-address-book"></i>Profile
                  </Link>
                  <Link to="#">
                    <i className="fa fa-bell"></i>Notifications
                  </Link>
                  <Link to="#" onClick={handleLogout}>
                    <i className="fa fa-power-off"></i>
                    Logout
                  </Link>
                </div>
              </li>
            )}
            {!localStorage.getItem("token") && (
              <li>
                <NavLink to="/login" className="login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <div className="mobileMenu">
        <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/blogs">Blog</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
