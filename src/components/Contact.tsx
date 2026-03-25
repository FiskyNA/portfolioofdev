import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:kumar.dev495900@gmail.com" data-cursor="disable">
                kumar.dev495900@gmail.com
              </a>
            </p>
            <h4>Status</h4>
            <div className="status-container">
              <span className="status-dot"></span>
              <p>Building AI at Boomcall</p>
            </div>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/fiskyna"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://discordapp.com/users/arnab9970"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Discord <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/maybeimdev/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Dev Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
