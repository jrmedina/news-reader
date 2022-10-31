import { fetchArticles } from "./apiCalls";
import "./App.css";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetchArticles("realestate").then((res) => console.log(res));
  }, []);






  return <div>App</div>;
};

export default App;
