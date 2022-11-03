import React, { useState } from "react";
import "./Hero.css";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Hero = ({ articles }) => {
  // const topArticles = articles.map((article, index) => {
  const [slide, setSlide] = useState(0);

  //   return (
  //     <div className={index === slide ? "slide active" : "slide"}>
  //       {index === slide && (
  //         <>
  //           <p className="section">{article.section}</p>
  //           <img
  //             className="hero-img"
  //             src={article.image.url}
  //             alt={article.title}
  //             id={index}
  //           />
  //           <h4 className="title">{article.title}</h4>
  //           <p>{article.byline}</p>
  //         </>
  //       )}
  //     </div>
  //   );
  // });
  // return (
  //   <>
  //     <h2 className="top-stories">TODAY'S TOP STORIES</h2>
  //     <div className="Hero">{topArticles}</div>
  //   </>
  // );

  const toBeDisplayed = articles.map((article, index) => {
    return (
      <div className={index === slide ? "slide active" : "slide "} key={index}>
        {index === slide && (
          <>
            <p className="section">{article.section}</p>
            <img
              className="hero-img"
              src={article.image.url}
              alt={article.title}
              id={index}
            />
            <h4 className="title">{article.title}</h4>
            <p>{article.byline}</p>
          </>
        )}
      </div>
    );
  });

  const handleSlide = (e) => {
    e.target.id === "left"
      ? setSlide(slide === articles.length - 1 ? 0 : slide + 1)
      : setSlide(slide === 0 ? articles.length - 1 : slide - 1);
  };

  return (
    <div className="hero">
      <h2 className="top-stories">TODAY'S TOP STORIES</h2>
      <div className="slider">
        <button className="left slide-btn" id="left" onClick={handleSlide}>
          <IoMdArrowRoundBack />
        </button>
        <button className="right slide-btn" id="right" onClick={handleSlide}>
          <IoMdArrowRoundForward />
        </button>
        {toBeDisplayed}

      </div>
    </div>
  );
};

export default Hero;
