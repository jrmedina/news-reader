import React from "react";
import { Link } from "react-router-dom";
import "./DetailCard.css";

const DetailCard = ({ article }) => {
  const { title, abstract, dates, byline, url, image, description, geography } =
    article;

  return (
    <div className="detail-card">
      <Link to={"/"}>
        <button>GO BACK</button>
      </Link>
      <h2 className="detail-title">{title}</h2>
      <br></br>
      <h3 className="by">{byline}</h3>
      <p className="abstract">
        {abstract}{" "}
        <a href={url} target="_blank" rel="noreferrer">
          more...{" "}
        </a>
      </p>
      <img className="detail-image" src={image.url} alt={image.copyright} />
      <div className="facet">
        <p>{description}</p>
        <p>{geography}</p>
      </div>
      <div className="dates">
        <p>
          DATES:
          <br></br>
          Created: {dates.created}
          <br></br>
          Published: {dates.published}
          <br></br>
          Updated: {dates.updated}
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
