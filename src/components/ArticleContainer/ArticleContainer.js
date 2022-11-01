import React from "react";
import Card from "../Card/Card";
import "./ArticleContainer.css";
import { Link } from "react-router-dom";
import nytimes from "../../assets/NYTimes.png";

const ArticleContainer = ({ articles }) => {
  const alphabetize = (art) => {
    return art.sort((a, b) =>
      a.section > b.section ? 1 : b.section > a.section ? -1 : 0
    );
  };

  const display = articles.length ? (
    alphabetize(articles).map((article, index) => {
      let img =
        article.multimedia !== null ? article.multimedia[0].url : nytimes;
      return (
        <Card
          title={article.title}
          image={img}
          index={index}
          key={index}
          section={article.section}
        />
      );
    })
  ) : (
    <div>
      <p>Let's try again...</p>
    </div>
  );

  return <div className="article-container">{display}</div>;
};

export default ArticleContainer;
