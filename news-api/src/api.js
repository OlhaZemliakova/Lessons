import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2/";
const apiKey = "a160f3711d1f4b3c84003495ef80ea91";

export default {
  getSources() {
    return axios.get(`top-headlines/sources`, {
      params: {
        apiKey: apiKey,
        country: "us",
      },
    });
  },
  getArticles(sourceId) {
    return axios.get(`everything/`, {
      params: {
        apiKey: apiKey,
        sources: sourceId,
        pageSize: 50,
        sortBy: "popularity",
      },
    });
  },
};
