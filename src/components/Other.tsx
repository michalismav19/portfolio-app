import Typist from "react-typist";
import "../App.scss";
import "./ResumeInformation.scss";
import SocialMedia from "./SocialMedia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Other() {
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
          <i className="resume-information-icon fas fa-list-ul"></i>

          <div className="resume-left-main">
            <Typist>
              <span className="resume-left-title">Other</span>
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
                <span className="resume-info-details-title">Languages</span>
                <span className="resume-info-details-value">
                  Examination for the Certificate of Proficiency in English
                </span>
                <span className="resume-info-details-secondary-value">
                  Dec 2016
                </span>
                <span className="resume-info-details-secondary-value">
                  University of Michigan
                </span>
              </div>
              <div className="resume-info-details-section">
                <span className="resume-info-details-title">
                  Honors & Awards
                </span>
                <span className="resume-info-details-value">
                  Honored participation on the 6th entrepreneurship competition
                </span>
                <span className="resume-info-details-secondary-value">
                  Nov 2016
                </span>
                <span className="resume-info-details-secondary-value">
                  Innovation and entrepreneurship unit (AUEB) <br />
                  Product Concept named "SmartLamp"
                  <br />
                </span>
              </div>
              <div className="resume-info-details-section">
                <span className="resume-info-details-title">Military</span>
                <span className="resume-info-details-value">
                  Military Service: Ended 8 June 2021
                </span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;
