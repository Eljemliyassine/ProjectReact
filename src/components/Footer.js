import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="under_footer_copy">
        <div className="logo_container">
          <img src="../logo192.png" alt="" />
        </div>
        &copy; {currentYear}
      </div>
      <div className="footer_container">
        <div className="social_container">
          <FaInstagramSquare className="footer_icon" />
          <FaFacebookSquare className="footer_icon" />
          <FaSquareXTwitter className="footer_icon" />
          <FaYoutube className="footer_icon" />
          <FaLinkedin className="footer_icon" />
        </div>
      </div>
    </>
  );
}

export default Footer;
