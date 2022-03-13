import React from "react";
import "./PortfolioItem.scss";

const PortfolioItem = React.memo((props) => {
  if (props.activeMenu === props.item.contentType) {
    return (
      <div className="item">
        <img
          src={require("../../../../images" + props.item.img + ".png")}
          alt="portfolio-item"
        />
        <p className="portfolio_item_name">{props.item.portfolioName}</p>
      </div>
    );
  } else return null;
});

export default PortfolioItem;
