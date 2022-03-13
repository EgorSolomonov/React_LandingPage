import React from "react";
import "./PortfolioMenu.scss";

const PortfolioMenu = React.memo((props) => {
  return (
    <div
      className={
        props.activeMenu === props.menuItem.id
          ? "menu_item active"
          : "menu_item"
      }
    >
      <h3 onClick={() => props.setActiveMenu(props.menuItem.id)}>
        {props.menuItem.name}
      </h3>
    </div>
  );
});

export default PortfolioMenu;
