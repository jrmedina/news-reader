import React, { useState } from "react";
import queryTerms from "../../utils/queryTerms"
import { fetchArticles } from "../../utils/apiCalls";

const SearchForm = ({ setArticles }) => {
  const [term, setTerm] = useState("");

  const queryOptions = queryTerms.map((q, index) => {
    return (
      <option key={index} value={q}>
        {q.toUpperCase()}
      </option>
    );
  });

  const handleChange = (e) => {
    setTerm(e.target.value);
    console.log(e.target.value);
    
fetchArticles(e.target.value).then((res) => {
setArticles(res.results);
});

  };

  return (
    <form className="dropdown-container">
      <select onChange={(e) => handleChange(e)} value={term}>
        <option value="" disabled>
          Select Your Articles
        </option>
        {queryOptions}
      </select>

      {/* <Link to={`/results`} onClick={handleClick}>
        <button className="choose-mood-button">Play Your Mood</button>
      </Link> */}
    </form>
  );
};

export default SearchForm;
