import { fetchArticles } from "../../utils/apiCalls";
import "./App.css";
import React, { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";

const App = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles("home").then((res) => setArticles(res.results));
  }, []);





  return <main>
    <h1>Times Reader</h1>
    <ArticleContainer articles={articles}/>
    
  </main>;
};

export default App;
