import { fetchArticles } from "../../utils/apiCalls";
import "./App.css";
import React, { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import DetailCard from "../../DetailCard/DetailCard";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchArticles("home").then((res) => {
      setArticles(res.results);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <p>loading...</p>
  ) : (
    <main>
      <h1>Times Reader</h1>
      {/* <ArticleContainer articles={articles}/> */}
      <DetailCard article={articles[3]} />
    </main>
  );
};

export default App;
