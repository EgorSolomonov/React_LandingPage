import "./Feedback.scss";
import React from "react";

const Feedback = React.memo((props) => {
  return (
    <div id="feedback" className="feedback_wrapper">
      <div className="feedback">
        <h1>FEEDBACK</h1>
        <div className="feedback_items_wrapper">
          {props.feedbackData.map((item) => {
            return (
              <div key={item.id} className="feedback_item">
                <div className="item_top">
                  <img
                    className="arrowLink"
                    src={require("../../../images/arrowLogoLink.png")}
                    alt="feedback arrow"
                  />
                  <img
                    className="logo"
                    src={require("../../../images/" + item.logo + ".png")}
                    alt="feedback logo"
                  />
                  <img
                    className="network_logo"
                    src={require("../../../images/" +
                      item.socialNetLogo +
                      ".png")}
                    alt="feedback link logo"
                  />
                </div>
                <p>{item.text}</p>
                <h2>{item.name + " " + item.id}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Feedback;
