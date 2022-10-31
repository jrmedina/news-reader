import React from "react";
import { Link } from "react-router-dom";
import "./DetailCard.css"



const DetailCard = ({article}) => {


    const {title, abstract, created_date,published_date, updated_date, byline, short_url, multimedia, des_facet} = article

  return (
    <div>
      <Link to={"/"}>
        <button>GO BACK</button>
      </Link>
      <h2>{title}</h2>
      <h3>{byline}</h3>
      {des_facet}
      <img
        className="detail-image"
        src={multimedia[0].url}
        alt={multimedia[0].caption}
      />

      <p>{abstract}</p>
      <a href={short_url} target="_blank" rel="noreferrer">
        more...{" "}
      </a>
      <div className="dates">
        <p>Created: {created_date}</p>
        <p>Published: {published_date}</p>
        <p>Updated: {updated_date}</p>
      </div>
    </div>
  );
};

export default DetailCard;
