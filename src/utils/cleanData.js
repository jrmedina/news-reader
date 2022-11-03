import nytimes from "../../src/assets/NYTimes.png";

const cleanData = (data) => {
  const img =
    data.multimedia !== null
      ? {
          url: data.multimedia[0].url,
          copyright: data.multimedia[0].copyright,
        }
      : { url: nytimes, copyright: "New York Times" };

  return {
    section: data.section,
    title: data.title,
    abstract: data.abstract,
    byline: data.byline,
    dates: {
      created: new Date(data.created_date).toDateString(),
      published: new Date(data.published_date).toDateString(),
      updated: new Date(data.updated_date).toDateString(),
    },
    description: data.des_facet.join(", "),
    geography: data.geo_facet.join(", "),
    url: data.short_url,
    image: img,
  };
};

export default cleanData;
