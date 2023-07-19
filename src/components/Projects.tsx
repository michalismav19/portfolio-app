import Typist from "react-typist";
import "../App.scss";
import "./ResumeInformation.scss";
import SocialMedia from "./SocialMedia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
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
          <i className="resume-information-icon fas fa-pencil-ruler"></i>

          <div className="resume-left-main">
            <Typist>
              <span className="resume-left-title">Projects</span>
              <br />
            </Typist>
          </div>
        </div>
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
                <span className="resume-info-details-value">Web Portfolio</span>
                <span className="resume-info-details-secondary-value">
                  March 2021 – Now
                </span>
                <span className="resume-info-details-secondary-value"></span>
              </div>
              <div className="resume-info-details-section">
                <span className="resume-info-details-title">Past</span>
                <span className="resume-info-details-value">
                  Exercises in Python programming language
                </span>
                <span className="resume-info-details-secondary-value">
                  Feb 2017 – Jun 2018
                </span>
                <span className="resume-info-details-secondary-value"></span>
              </div>
              <div className="resume-info-details-section">
                <span className="resume-info-details-title">Past</span>
                <span className="resume-info-details-value">
                  Development of an information system (implementation and
                  architecture)
                </span>
                <span className="resume-info-details-secondary-value">
                  Oct 2017 – Jan 2018
                </span>
                <span className="resume-info-details-secondary-value">
                  Development of an information system called "JobMe", in which
                  users upload their personal resume, so companies can search
                  employees through this site through jsp, sql server, HTML, css
                  and JavaScript
                </span>
              </div>
              <div className="resume-info-details-section">
                <span className="resume-info-details-title">Past</span>
                <span className="resume-info-details-value">
                  Product Design "SmartLamp" with IoT technology
                </span>
                <span className="resume-info-details-secondary-value">
                  Feb 2017 – Jun 2017
                </span>
                <span className="resume-info-details-secondary-value">
                  Development of business idea with IoT technology and creation
                  of a prototype
                </span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
