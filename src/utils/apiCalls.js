const fetchArticles = async (query) => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=jEnxtMxPoFUzWywbiJSS5nHch0AOHqlP`
    );
    const json = await response.json();
    if (json.status === "OK") {
      return json;
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { fetchArticles };
