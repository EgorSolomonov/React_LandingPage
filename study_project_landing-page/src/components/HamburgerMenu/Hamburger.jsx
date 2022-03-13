import { ClassNames } from "@emotion/react";
import React from "react";
import "./Hamburger.scss";

const Hamburger = React.memo((props) => {
  const classes = ["hamburger_menu_wrapper"];
  if (props.hamburger) classes.push("activeHamburger");
  return (
    <div className={classes.join(" ")}>
      <div className="hamburger_menu">
        <ul>
          <li onClick={() => props.setHamburger(false)}>
            <a href="#intro">Intro</a>
          </li>
          <li onClick={() => props.setHamburger(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => props.setHamburger(false)}>
            <a href="#slider">Slider</a>
          </li>
          <li onClick={() => props.setHamburger(false)}>
            <a href="#feedback">Feedback</a>
          </li>
          <li onClick={() => props.setHamburger(false)}>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Hamburger;
