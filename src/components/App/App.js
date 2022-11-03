import { fetchArticles } from "../../utils/apiCalls";
import "./App.css";
import React, { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import { Switch, Route, Link } from "react-router-dom";
import DetailCard from "../DetailCard/DetailCard";
import SearchForm from "../SearchForm/SearchForm";
import loadingImg from "../../assets/loading.svg";
import Error from "../Error/Error";
import Hero from "../Hero/Hero";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles("home");
  }, []);

  const getArticles = (term) => {
    setLoading(true);
    fetchArticles(term).then((res) => {
      setArticles(res);
      setLoading(false);
    });
  };

  const findArticle = (id) =>
    articles.find((article, index) => index === parseInt(id));

  const searchArticles = (term) => {
    return articles.filter((article) =>
      article.title.toLowerCase().includes(term.toLowerCase())
    );
  };

  return loading ? (
    <img src={loadingImg} className="loading" alt="loading" />
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
                <Link to={"/"}>
                  <button className="back">GO BACK</button>
                </Link>
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
              <SearchForm getArticles={getArticles} />
              <Hero articles={articles.splice(0,3)}/>
              <ArticleContainer articles={articles} />
            </div>
          )}
        />
        <Route
          path="*"
          render={() => (
            <div>
              <Error />
            </div>
          )}
        />
      </Switch>
    </main>
  );
};

export default App;
