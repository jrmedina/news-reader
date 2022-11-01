import React from "react";
import Card from "../Card/Card";
import "./ArticleContainer.css";
import { Link } from "react-router-dom";


const ArticleContainer = ({ articles }) => {
  const display = articles.length ? (
    articles.map((article, index) => {
      let img =
        article.multimedia !== null
          ? article.multimedia[0].url
          : `https://www.ahrcnyc.org/wp-content/uploads/2020/04/NY-Times.png`;
      return (
        <Card title={article.title} image={img} index={index} key={index} />
      );
    })
  ) : (
    <div>
      <p>Let's try again...</p>
      <Link to={"/"}>
        <button>GO BACK</button>
      </Link>
    </div>
  );



  return <div className="article-container">{display}</div>;
};

export default ArticleContainer;
