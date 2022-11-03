import cleanData from "./cleanData";

const fetchArticles = async (query) => {
  try {
    const response = await fetch(
      //enter your api key here
      `https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=jEnxtMxPoFUzWywbiJSS5nHch0AOHqlP`
    );
    const json = await response.json();
    if (json.status === "OK") {
      return json.results.map((art) => cleanData(art));
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchArticles };
