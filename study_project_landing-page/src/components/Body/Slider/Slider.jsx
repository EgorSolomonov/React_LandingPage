import "./Slider.scss";
import React from "react";

const Slider = React.memo((props) => {
  return (
    <div id="slider" className="slider_wrapper">
      <img
        onClick={() => props.onMoveSlidesForward()}
        className="arrow left"
        src={require("../../../images/singleArrow.png")}
        alt="arrow left"
      />
      <img
        onClick={() => props.onMoveSlidesBack()}
        className="arrow right"
        src={require("../../../images/singleArrow.png")}
        alt="arrow right"
      />
      <div className="slider" style={{ left: props.slideNum + "vw" }}>
        {props.sliderData.map((slide) => {
          return (
            <div className="slide_container" key={slide.id}>
              <div className="slide">
                <div className="slide_left">
                  <img
                    src={require("../../../images/" + slide.icon + ".png")}
                    alt="project icon"
                  />
                  <h2>{slide.title} </h2>
                  <p>{slide.text} </p>
                  <a href="#">See the project...</a>
                </div>
                <div className="slide_right">
                  <img
                    src={require("../../../images/" + slide.img + ".png")}
                    alt="Project img"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Slider;
