import Typist from "react-typist"; //npm install react-typist --save
import "../App.scss";
import "./ResumeInformation.scss";
import SocialMedia from "./SocialMedia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Education() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="main-container">
      <div className="resume-left-info">
        <div className="resume-left-container">
          <i className="resume-information-icon fas fa-briefcase"></i>

          <div className="resume-left-main">
            <Typist>
              <span className="resume-left-title">Work</span>
              <br />
            </Typist>
          </div>
        </div>

        {/* Social Media Section */}
        <SocialMedia className="mobile" />
      </div>

      <div className="vertical-divider-first"></div>
      <div className="horizontial-divider"></div>
      <div className="vertical-divider-second"></div>

      <div className="resume-right-info">
        <div className="resume-right-container">
          <div className="resume-info-details">
            <Slider {...settings}>
              <div className="resume-info-details-section">
                <span className="resume-info-details-title">Now</span>
                <span className="resume-info-details-value">
                  Full Stack Developer – UX/UI Designer at CollegeLink Company
                  (March 2018 – Now)
                </span>
                <span className="resume-info-details-secondary-value">
                  Assistant for participants at Web Development Academy vol.2 by
                  Collegelink <br />
                  Assistant for participants at Web Development Academy vol.3 by
                  Collegelink <br />
                </span>
                <span className="resume-info-details-secondary-value">
                  <b>Front-End:</b> HTML, CSS, Javascript, jQuery, AJAX <br />
                  <b>Back-end:</b> PHP <br />
                  <b>DataBase:</b> PhpMyAdmin, SQL <br />
                  <b>Design Tools:</b> Figma, Axure RP, Photoshop <br />
                  <b>Programs:</b> Visual Studio Code, Sublime <br />
                  <b>Other:</b> GitKraken, MacOS, Windows
                </span>
              </div>
              <div className="resume-info-details-section">
                <span className="resume-info-details-title">Past</span>
                <span className="resume-info-details-value">
                  Full Stack Developer at KEPYES/GES (Octomber 2020 – June 2021)
                </span>
                <span className="resume-info-details-secondary-value">
                  <b>
                    For my services to the greek military i worked as Full-Stack
                    Developer.
                  </b>{" "}
                  <br />
                  <b>Front-End:</b> HTML, CSS, SCSS, ReactJs <br />
                  <b>Back-end:</b> PHP Symfony <br />
                  <b>DataBase:</b> Oracle DB, SQL <br />
                  <b>Programs:</b> Visual Studio Code, WebStorm, PhpStorm,
                  DataGrip <br />
                  <b>Other:</b> GitLab, Linux
                </span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
