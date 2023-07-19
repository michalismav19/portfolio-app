import React from "react";
import "../Resume.scss";
import "./ResumeFancybox.scss";
import ResumeEducationFancybox from "./ResumeEducationFancybox";

function ResumeFancybox({ open, children, onClose, tabResumeId }) {
  // Css code for arrows not displaying when we reach the start or end of resume section tabs
  const DISPLAY_STYLES = {
    display: "none",
  };

  const [counter, setCounter] = React.useState(1);

  const onButtonClickAdd = (e) => {
    let num = parseInt(e.target.id);
    let count = (num += 1);
    setCounter(count);

    return count;
  };

  const onButtonClickDecrease = (e) => {
    let num = parseInt(e.target.id);
    let count = (num -= 1);
    setCounter(count);

    return count;
  };

  if (!open) {
    return null;
  } else {
    switch (tabResumeId) {
      // Education Tab
      case "tab-1":
        return (
          <div className="overlay">
            <div className="fancybox">
              {/* Start: Fancybox section */}
              <div className="fancybox-insider">
                <button className="fancybox-close-btn" onClick={onClose}>
                  X
                </button>
                <div className="fancybox-tab">
                  <span className="fancybox-title">EDUCATION</span>

                  <div className="fancybox-container">
                    <ResumeEducationFancybox
                      resumeSectionId={"education-info-" + counter}
                    ></ResumeEducationFancybox>

                    <i
                      id={"" + counter}
                      style={counter === 1 ? DISPLAY_STYLES : null}
                      className="resume-container-next fas fa-chevron-left"
                      onClick={onButtonClickDecrease}
                    ></i>
                    <i
                      id={"" + counter}
                      style={counter === 2 ? DISPLAY_STYLES : null}
                      className="resume-container-next fas fa-chevron-right"
                      onClick={onButtonClickAdd}
                    ></i>
                  </div>

                  <i className="education-icon fas fa-graduation-cap"></i>
                </div>
              </div>
              {/* End: Fancybox section */}
            </div>
          </div>
        );
      // Work Tab
      case "tab-2":
        return "bar";

      // Projects Tab
      case "tab-3":
        return "bar";

      // Seminars Tab
      case "tab-4":
        return "bar";

      // Languages Tab
      case "tab-5":
        return "bar";

      // Skills Tab
      case "tab-6":
        return (
          <div className="overlay">
            <div className="fancybox">
              {/* Start: Fancybox section */}
              <div className="fancybox-insider">
                <button className="fancybox-close-btn" onClick={onClose}>
                  X
                </button>
                <div className="fancybox-tab">
                  <span className="fancybox-title">Skills</span>

                  <div className="fancybox-container"></div>
                </div>
              </div>
              {/* End: Fancybox section */}
            </div>
          </div>
        );

      default:
        return null;
    }
  }
}

export default ResumeFancybox;
