const API_KEY = "33bde3fbbc3491fad80782421ebe5f35";

const REQUEST = {
  //   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&region=IN`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchNetflixHindi: `/discover/tv?api_key=${API_KEY}&ott_region=IN&with_ott_providers=8&with_original_language=hi&with_genres=10759|80|99|9648|10768`,
};

const IMG = {
  baseURL: "https://image.tmdb.org/t/p/original",
  cdnURL: "//images.weserv.nl/?url=",
  transformIMG: "&w=250&output=webp&q=100",
};

export default REQUEST;
export { IMG };
