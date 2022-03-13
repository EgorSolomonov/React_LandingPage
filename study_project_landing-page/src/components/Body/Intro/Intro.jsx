import "./Intro.scss";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

const Intro = React.memo(() => {
  const refH3 = useRef();

  useEffect(() => {
    init(refH3.current, {
      showCursor: true,
      strings: ["React landing page"],
      typeSpeed: 500,
      backSpeed: 250,
      backDelay: 3000,
    });
  }, []);

  return (
    <div id="intro" className="intro_wrapper">
      <div className="intro">
        <div className="intro_left">
          <div className="imgContainer">
            <img
              src={require("../../../images/manPic.jpeg")}
              alt="man_picture"
            />
          </div>
        </div>
        <div className="intro_right">
          <div className="textContainer">
            <h1>Welcome</h1>
            <h2>To my study project...</h2>
            <h3>
              <span ref={refH3}></span>
            </h3>
          </div>
          <div className="arrow_down">
            <a href="#portfolio">
              <img
                src={require("../../../images/arrow.png")}
                alt="arrow_down"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Intro;
