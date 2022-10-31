import React from "react";
import Card from "../Card/Card";
import "./ArticleContainer.css"

const ArticleContainer = ({ articles }) => {
  const cards = articles.map((article) => (
    <Card title={article.title} image={article.multimedia[0].url} />
  ));

  return <div className="article-container">{cards}</div>;
};

export default ArticleContainer;
