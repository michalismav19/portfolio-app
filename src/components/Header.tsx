import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

function Header({ changeTheme }) {
  const location = useLocation();
  console.log(location.pathname);

  let color1 = "";
  let color2 = "";
  let color3 = "";
  let color4 = "";
  let color5 = "";
  let color6 = "";
  let color7 = "";

  switch (location.pathname) {
    case "/":
      color1 = "#3fb0ac";
      break;
    case "/education":
      color2 = "#3fb0ac";
      break;
    case "/work":
      color3 = "#3fb0ac";
      break;
    case "/seminars":
      color4 = "#3fb0ac";
      break;
    case "/projects":
      color5 = "#3fb0ac";
      break;
    case "/other":
      color6 = "#3fb0ac";
      break;
    case "/skills":
      color7 = "#3fb0ac";
      break;
    default:
      break;
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-main">
          <Link className="header-title" to="/">
            Portfolio
          </Link>

          <div className="header-btns">
            <span className="header-button">
              <Link style={{ color: color1 }} className="aboutme-btn" to="/">
                HOME
              </Link>
            </span>
            <span className="header-button">
              <Link
                style={{ color: color2 }}
                className="education-btn"
                to="/education"
              >
                EDUCATION
              </Link>
            </span>
            <span className="header-button">
              <Link style={{ color: color3 }} className="work-btn" to="/work">
                WORK
              </Link>
            </span>
            <span className="header-button">
              <Link
                style={{ color: color4 }}
                className="seminar-btn"
                to="/seminars"
              >
                SEMINARS
              </Link>
            </span>
            <span className="header-button">
              <Link
                style={{ color: color5 }}
                className="project-btn"
                to="/projects"
              >
                PROJECTS
              </Link>
            </span>
            <span className="header-button">
              <Link
                style={{ color: color6 }}
                className="language-btn"
                to="/other"
              >
                OTHER
              </Link>
            </span>
            <span className="header-button">
              <Link
                style={{ color: color7 }}
                className="skills-btn"
                to="/skills"
              >
                SKILLS
              </Link>
            </span>
          </div>

          <div className="header-theme">
            <label id="switch" className="switch">
              <input type="checkbox" onChange={changeTheme} id="slider"></input>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
