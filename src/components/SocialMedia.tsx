import "./SocialMedia.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function SocialMedia({ className }) {
  return (
    <div className={"social-media " + className}>
      <div className="social-media-container">
        <a
          href="https://www.facebook.com/michalis.mavromatakis/"
          rel="noreferrer"
          target="_blank"
          className="fab fa-facebook-f"
        >
          <FontAwesomeIcon
            icon={icon({ name: "facebook-f", style: "brands" })}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/michalis-mavromatakis/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={icon({ name: "linkedin-in", style: "brands" })}
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=michamav19@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={icon({ name: "envelope", style: "solid" })} />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
