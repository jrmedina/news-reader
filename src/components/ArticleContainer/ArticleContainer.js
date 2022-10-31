import React from "react";
import Card from "../Card/Card";
import "./ArticleContainer.css"

const ArticleContainer = ({ articles, findArticle }) => {
  const cards = articles.map((article, index) => (
    <Card title={article.title} image={article.multimedia[0].url} index={index} findArticle={findArticle} key={index}/>
  ));

  return <div className="article-container">{cards}</div>;
};

export default ArticleContainer;
