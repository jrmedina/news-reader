import React from "react";

const DetailCard = ({article}) => {
    console.log(article);
    const {title, abstract, created_date,published_date, updated_date, byline, short_url, multimedia, des_facet} = article

  return (
    <div>
      <h2>{title}</h2>
      <h3>{byline}</h3>
      {des_facet}
      <img src={multimedia[0].url} alt={multimedia[0].caption} />
   
      <p>{abstract}</p>
      <a href={short_url}>more... </a>
      <div className="dates">
        <p>Created: {created_date}</p>
        <p>Published: {published_date}</p>
        <p>Updated: {updated_date}</p>
      </div>
    </div>
  );
};

export default DetailCard;
