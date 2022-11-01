import React from "react";
import { Link } from "react-router-dom";
import "./DetailCard.css";

const DetailCard = ({ article }) => {
  const {
    title,
    abstract,
    created_date,
    published_date,
    updated_date,
    byline,
    short_url,
    multimedia,
    des_facet,
    geo_facet,
  } = article;

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
        <a href={short_url} target="_blank" rel="noreferrer">
          more...{" "}
        </a>
      </p>
      <img
        className="detail-image"
        src={multimedia[0].url}
        alt={multimedia[0].caption}
      />
      <p>{des_facet.join(", ")}</p>
      <p>{geo_facet.join(", ")}</p>
      <div className="dates">
        <p>
          DATES:
          <br></br>
          Created: {new Date(created_date).toDateString()}
          <br></br>
          Published: {new Date(published_date).toDateString()}
          <br></br>
          Updated: {new Date(updated_date).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
