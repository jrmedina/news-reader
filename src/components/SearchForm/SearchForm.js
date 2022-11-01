import React, { useState } from "react";
import queryTerms from "../../utils/queryTerms";
import "./SearchForm.css";
import { Link } from "react-router-dom";

const SearchForm = ({ getArticles }) => {
  const [term, setTerm] = useState("");
  const [lock, setLock] = useState(true);
  // const [order, setOrder] = useState("");
  const queryOptions = queryTerms.map((q, index) => {
    return (
      <option key={index} value={q}>
        {q.toUpperCase()}
      </option>
    );
  });

  const handleInput = (e) => {
    setTerm(e.target.value);
    e.target.value ? setLock(false) : setLock(true);
  };

  return (
    <form className="form">
      <select
        onChange={(e) => getArticles(e.target.value)}
        value={term}
        className="dropdown"
      >
        <option value="" disabled>
          Select Your Articles
        </option>
        {queryOptions}
      </select>
      <input
        type="text"
        placeholder="search current articles"
        className="search"
        value={term}
        onChange={(e) => handleInput(e)}
      />
      <Link to={`/search/${term}`}>
        <button disabled={lock}>Search</button>
      </Link>
      {/* <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="" disabled>
          Alphabetize
        </option>
        <option value="A">A - Z</option>
        <option value="Z">Z - A</option>
      </select>
      <button onClick={(e) => alphabetize(order)}>Search</button> */}
    </form>
  );
};

export default SearchForm;
