import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const FooterMain = () => {
  return (
    <div className="  footer-main">
      <div className="footer-div">
        <div className="title">Jobs</div>
        <ul>
          <li>
            <a href="">Browse jobs</a>
          </li>
          <li>
            <a href="">Manage Profile</a>
          </li>
        </ul>
      </div>
      <div className="footer-div">
        <div className="title">Other</div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-div">
        <div className="title">Contact Us</div>
        <div className="f-links">
          <ul className="footer-icons">
            <li>
              <a href="">
                <span className="span-1">
                  <CiMail />
                </span>
                info@jobsshopper.com
              </a>
            </li>
            <li>
              <a href="">
                <span className="span-2">
                  <FaInstagram />
                </span>
                Instagram
              </a>
            </li>
            <li>
              <a href="">
                <span className="span-3">
                  <FaFacebook />
                </span>
                FaceBook
              </a>
            </li>
            <li>
              <a href="">
                <span className="span-4">
                  <FaTwitter />
                </span>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
