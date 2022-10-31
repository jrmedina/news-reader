import { fetchArticles } from "../../utils/apiCalls";
import "./App.css";
import React, { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import { Switch, Route } from "react-router-dom";
import DetailCard from "../../DetailCard/DetailCard";
import SearchForm from "../SearchForm/SearchForm";

const App = () => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line
  const [article, setArticle] = useState({});

  useEffect(() => {
    setLoading(true);
    fetchArticles("world").then((res) => {
      setArticles(res.results);
      setLoading(false);
    });
  }, []);

  const findArticle = (id) => {
    // eslint-disable-next-line
    return articles.find((article, index) => {
      if (index === parseInt(id)) {
        setArticle(article);
        return article;
      }
    });
  };

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <main>
      <h1>Times Reader</h1>

      <Switch>
        <Route
          exact
          path="/article/:index"
          render={({ match }) => <DetailCard article={article} />}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <SearchForm setArticles={setArticles} />
              <ArticleContainer articles={articles} findArticle={findArticle} />
            </div>
          )}
        />

        {/* <DetailCard article={articles[3]} /> */}
      </Switch>
    </main>
  );
};

export default App;
