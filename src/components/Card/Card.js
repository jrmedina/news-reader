import React from "react";
import "./Card.css"

const Card = ({image, title}) => {
  return (
    <article className="article-card">
      <h3 className="title">{title}</h3>
      <img className="card-img" src={image} alt={title} />
    </article>
  );
};

export default Card;
