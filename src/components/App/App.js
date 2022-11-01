import { fetchArticles } from "../../utils/apiCalls";
import "./App.css";
import React, { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import { Switch, Route } from "react-router-dom";
import DetailCard from "../DetailCard/DetailCard";
import SearchForm from "../SearchForm/SearchForm";

const App = () => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchArticles("home").then((res) => {
      setArticles(res.results);
      setLoading(false);
    });
  }, []);

  const findArticle = (id) => {
    // eslint-disable-next-line
    return articles.find((article, index) => {
      if (index === parseInt(id)) {
        return article;
      }
    });
  };

  const searchArticles = (term) => {
    return articles.filter((article) =>
      article.title.toLowerCase().includes(term)
    );
  };

  return loading ? (
    <h3>LOADING...</h3>
  ) : (
    <main className="App">
      <Switch>
        <Route
          exact
          path="/article/:index"
          render={({ match }) => {
            return (
              <DetailCard article={findArticle(parseInt(match.params.index))} />
            );
          }}
        />

        <Route
          exact
          path="/search/:term"
          render={({ match }) => {
            return (
              <div>
                <h3>Search results for: "{match.params.term}"</h3>
                <ArticleContainer
                  articles={searchArticles(match.params.term)}
                  findArticle={findArticle}
                />
              </div>
            );
          }}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>Times Reader ({articles[0] && articles[0].section})</h1>
              <SearchForm setArticles={setArticles} />
              <ArticleContainer articles={articles} />
            </div>
          )}
        />
      </Switch>
    </main>
  );
};

export default App;
