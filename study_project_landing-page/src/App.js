import "./App.scss";
import React, { useEffect, useRef, useState } from "react";
import HeadBar from "./components/Head/HeadBar";
import Intro from "./components/Body/Intro/Intro";
import Portfolio from "./components/Body/Portfolio/Portfolio";
import Slider from "./components/Body/Slider/Slider";
import Feedback from "./components/Body/Feedback/Feedback";
import Contacts from "./components/Body/Contacts/Contacts";
import Hamburger from "./components/HamburgerMenu/Hamburger";

/* project stateData */

const portfolioMenu = [
  {
    id: 1,
    name: "Name1",
  },
  {
    id: 2,
    name: "Name2",
  },
  {
    id: 3,
    name: "Name3",
  },
  {
    id: 4,
    name: "Name4",
  },
  {
    id: 5,
    name: "Name5",
  },
];

const portfolio1Items = [
  {
    id: 1,
    contentType: 1,
    img: "/defaultPortfolio",
    portfolioName: "PortfolioName",
  },
  {
    id: 2,
    contentType: 1,
    img: "/defaultPortfolio",
    portfolioName: "PortfolioName",
  },
  {
    id: 3,
    contentType: 1,
    img: "/defaultPortfolio",
    portfolioName: "PortfolioName",
  },
  {
    id: 4,
    contentType: 1,
    img: "/defaultPortfolio",
    portfolioName: "PortfolioName",
  },
  {
    id: 5,
    contentType: 1,
    img: "/defaultPortfolio",
    portfolioName: "PortfolioName",
  },
  {
    id: 6,
    contentType: 1,
    img: "/defaultPortfolio",
    portfolioName: "PortfolioName",
  },
  {
    id: 7,
    contentType: 1,
    img: "/defaultPortfolio",
    portfolioName: "PortfolioName",
  },
  {
    id: 8,
    contentType: 1,
    img: "/defaultPortfolio",
    portfolioName: "PortfolioName",
  },
  {
    id: 9,
    contentType: 2,
    img: "/defaultPortfolio2",
    portfolioName: "PortfolioName",
  },
  {
    id: 10,
    contentType: 2,
    img: "/defaultPortfolio2",
    portfolioName: "PortfolioName",
  },
  {
    id: 11,
    contentType: 2,
    img: "/defaultPortfolio2",
    portfolioName: "PortfolioName",
  },
  {
    id: 12,
    contentType: 2,
    img: "/defaultPortfolio2",
    portfolioName: "PortfolioName",
  },
  {
    id: 13,
    contentType: 2,
    img: "/defaultPortfolio2",
    portfolioName: "PortfolioName",
  },
  {
    id: 14,
    contentType: 2,
    img: "/defaultPortfolio2",
    portfolioName: "PortfolioName",
  },
  {
    id: 15,
    contentType: 2,
    img: "/defaultPortfolio2",
    portfolioName: "PortfolioName",
  },
  {
    id: 16,
    contentType: 2,
    img: "/defaultPortfolio2",
    portfolioName: "PortfolioName",
  },
  {
    id: 17,
    contentType: 3,
    img: "/defaultPortfolio3",
    portfolioName: "PortfolioName",
  },
  {
    id: 18,
    contentType: 3,
    img: "/defaultPortfolio3",
    portfolioName: "PortfolioName",
  },
  {
    id: 19,
    contentType: 3,
    img: "/defaultPortfolio3",
    portfolioName: "PortfolioName",
  },
  {
    id: 20,
    contentType: 3,
    img: "/defaultPortfolio3",
    portfolioName: "PortfolioName",
  },
  {
    id: 21,
    contentType: 3,
    img: "/defaultPortfolio3",
    portfolioName: "PortfolioName",
  },
  {
    id: 22,
    contentType: 3,
    img: "/defaultPortfolio3",
    portfolioName: "PortfolioName",
  },
  {
    id: 23,
    contentType: 3,
    img: "/defaultPortfolio3",
    portfolioName: "PortfolioName",
  },
  {
    id: 24,
    contentType: 3,
    img: "/defaultPortfolio3",
    portfolioName: "PortfolioName",
  },
  {
    id: 25,
    contentType: 4,
    img: "/defaultPortfolio4",
    portfolioName: "PortfolioName",
  },
  {
    id: 26,
    contentType: 4,
    img: "/defaultPortfolio4",
    portfolioName: "PortfolioName",
  },
  {
    id: 27,
    contentType: 4,
    img: "/defaultPortfolio4",
    portfolioName: "PortfolioName",
  },
  {
    id: 28,
    contentType: 4,
    img: "/defaultPortfolio4",
    portfolioName: "PortfolioName",
  },
  {
    id: 29,
    contentType: 4,
    img: "/defaultPortfolio4",
    portfolioName: "PortfolioName",
  },
  {
    id: 30,
    contentType: 4,
    img: "/defaultPortfolio4",
    portfolioName: "PortfolioName",
  },
  {
    id: 31,
    contentType: 4,
    img: "/defaultPortfolio4",
    portfolioName: "PortfolioName",
  },
  {
    id: 32,
    contentType: 4,
    img: "/defaultPortfolio4",
    portfolioName: "PortfolioName",
  },
  {
    id: 33,
    contentType: 5,
    img: "/defaultPortfolio5",
    portfolioName: "PortfolioName",
  },
  {
    id: 34,
    contentType: 5,
    img: "/defaultPortfolio5",
    portfolioName: "PortfolioName",
  },
  {
    id: 35,
    contentType: 5,
    img: "/defaultPortfolio5",
    portfolioName: "PortfolioName",
  },
  {
    id: 36,
    contentType: 5,
    img: "/defaultPortfolio5",
    portfolioName: "PortfolioName",
  },
  {
    id: 37,
    contentType: 5,
    img: "/defaultPortfolio5",
    portfolioName: "PortfolioName",
  },
  {
    id: 38,
    contentType: 5,
    img: "/defaultPortfolio5",
    portfolioName: "PortfolioName",
  },
  {
    id: 39,
    contentType: 5,
    img: "/defaultPortfolio5",
    portfolioName: "PortfolioName",
  },
  {
    id: 40,
    contentType: 5,
    img: "/defaultPortfolio5",
    portfolioName: "PortfolioName",
  },
];

const sliderData = [
  {
    id: 1,
    title: "Work 1",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    link: "https://www.special.link",
    icon: "projectIcon",
    img: "projectImg",
  },
  {
    id: 2,
    title: "Work 2",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    link: "https://www.special.link",
    icon: "projectIcon",
    img: "projectImg",
  },
  {
    id: 3,
    title: "Work 3",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    link: "https://www.special.link",
    icon: "projectIcon",
    img: "projectImg",
  },
  {
    id: 4,
    title: "Work 4",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    link: "https://www.special.link",
    icon: "projectIcon",
    img: "projectImg",
  },
];

const feedbackData = [
  {
    id: 1,
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    name: "Author name",
    logo: "logo1",
    socialNetLogo: "twitter",
    active: false,
  },
  {
    id: 2,
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    name: "Author name",
    logo: "logo2",
    socialNetLogo: "facebook",
    active: false,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    name: "Author name",
    logo: "logo3",
    socialNetLogo: "instagram",
    active: false,
  },
];

function App() {
  const [hamburger, setHamburger] = useState(false);
  const [slideNum, setSlideNum] = useState(0);
  const [pushedContactButton, setContactButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContactButton(false);
    }, 5000);
  }, [pushedContactButton]);

  /* Обработка слайдера */
  const onMoveSlidesBack = () => {
    slideNum === -300 ? setSlideNum(0) : setSlideNum(slideNum - 100);
  };

  const onMoveSlidesForward = () => {
    slideNum === 0 ? setSlideNum(-300) : setSlideNum(slideNum + 100);
  };

  return (
    <div className="app">
      <HeadBar hamburger={hamburger} setHamburger={setHamburger} />
      <Hamburger hamburger={hamburger} setHamburger={setHamburger} />
      <div className="body">
        <Intro />
        <Portfolio
          portfolioMenu={portfolioMenu}
          portfolio1Items={portfolio1Items}
        />
        <Slider
          sliderData={sliderData}
          slideNum={slideNum}
          onMoveSlidesBack={onMoveSlidesBack}
          onMoveSlidesForward={onMoveSlidesForward}
        />
        <Feedback feedbackData={feedbackData} />
        <Contacts
          pushedContactButton={pushedContactButton}
          setContactButton={setContactButton}
        />
      </div>
    </div>
  );
}

export default App;
