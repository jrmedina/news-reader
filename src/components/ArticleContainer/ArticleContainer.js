import React from "react";
import Card from "../Card/Card";
import "./ArticleContainer.css"

const ArticleContainer = ({ articles, findArticle }) => {
  const cards = articles.map((article, index) => {
    let img =
      article.multimedia !== null
        ? article.multimedia[0].url
        : `https://www.ahrcnyc.org/wp-content/uploads/2020/04/NY-Times.png`;
    return (
      <Card
        title={article.title}
        image={img}
        index={index}
        findArticle={findArticle}
        key={index}
      />
    );
  }


  );

  return <div className="article-container">{cards}</div>;
};

export default ArticleContainer;

