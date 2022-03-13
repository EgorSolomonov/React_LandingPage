import "./HeadBar.scss";
import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const HeadBar = React.memo((props) => {
  const activeClass = ["head_bar"];
  if (props.hamburger) {
    activeClass.push("activeHamburger");
  }
  return (
    <div className={activeClass.join(" ")}>
      <div className="head_bar_wrapper">
        <div className="head_bar_logo">
          <a href="#intro">
            <h1>React study project</h1>
          </a>
          <div className="head_bar_contacts">
            <div className="head_bar_phone">
              <PhoneAndroidIcon fontSize="small" />
              <span>+7999-999-99-99</span>
            </div>
            <div className="head_bar_email">
              <AlternateEmailIcon fontSize="medium" />
              <span>Egorsolomonov@gmail.com</span>
            </div>
          </div>
        </div>
        <div
          onClick={() => props.setHamburger(!props.hamburger)}
          className="head_bar_hamburger"
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
});

export default HeadBar;
