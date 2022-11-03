import React from "react";
import Card from "../Card/Card";
import "./ArticleContainer.css";

const ArticleContainer = ({ articles }) => {
  // const alphabetize = (art) => {
  //   return art.sort((a, b) =>
  //     a.section > b.section ? 1 : b.section > a.section ? -1 : 0
  //   );
  // };

  // const alphabetize = (art) => {
  //   return art.sort((a, b) =>
  //     a.section !== b.section ? (a.section < b.section ? -1 : 1) : 0
  //   );
  // };

  const alphabetize = (art) =>
    art.sort((a, b) => a.section.localeCompare(b.section));
    
  // The localeCompare() method returns a number indicating whether a reference string comes before,
  //or after, or is the same as the given string in sort order.

  const display = articles.length ? (
    alphabetize(articles).map((article, index) => {
      return (
        <Card
          title={article.title}
          image={article.image.url}
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
