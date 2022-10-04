import React from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TelegramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2022 Amirkhan.com</p>
    </div>
  );
}

export default Footer;
