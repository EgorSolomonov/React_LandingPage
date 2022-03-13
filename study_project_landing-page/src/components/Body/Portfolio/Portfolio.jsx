import "./Portfolio.scss";
import React, { useState } from "react";
import PortfolioMenu from "./PortfolioMenu/PortfolioMenu";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio = React.memo((props) => {
  const [activeMenu, setActiveMenu] = useState(1);
  return (
    <div id="portfolio" className="portfolio_wrapper">
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio_menu">
          {props.portfolioMenu.map((menuItem) => {
            return (
              <PortfolioMenu
                key={menuItem.id}
                menuItem={menuItem}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            );
          })}
        </div>
        <div className="portfolio_items">
          {props.portfolio1Items.map((item) => {
            return (
              <PortfolioItem
                key={item.id}
                activeMenu={activeMenu}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Portfolio;
