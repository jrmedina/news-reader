import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({image, title, index, findArticle}) => {
  return (
    <article className="article-card">
      <h3 className="title">{title}</h3>
      <p>{index}</p>
      <Link to={`/article/${index}`}>
        <img
          className="card-img"
          src={image}
          alt={title}
          id={index}
          onClick={(e) => findArticle(e.target.id)}
        />
      </Link>
    </article>
  );
};

export default Card;
