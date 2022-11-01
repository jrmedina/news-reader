import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, title, index }) => {
  return (
    <article className="article-card">
      <Link to={`/article/${index}`}>
        <img className="card-img" src={image} alt={title} id={index} />
      </Link>
      <h5 className="title">{title}</h5>
    </article>
  );
};

export default Card;
