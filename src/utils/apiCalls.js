const fetchArticles = async (query) => {
  try {
    const response = await fetch(
      //enter your api key here
      `https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=jEnxtMxPoFUzWywbiJSS5nHch0AOHqlP`
    );
    const json = await response.json();
    if (json.status === "OK") {
      console.log(json);
      
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
