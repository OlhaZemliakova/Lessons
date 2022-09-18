import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const apiKey = "200157ac4bdebe822c80a2515fc31204";

export default {
  getResults(params) {
    return axios.get(`search/movie`, {
      params: {
        api_key: apiKey,
        query: params.query ? params.query : undefined,
        year: params.year ? params.year : undefined,
        genre: params.genre ? params.genre : undefined,
        rating: params.rating ? params.rating : undefined,
        page: params.page,
      },
    });
  },
  getDetails(id) {
    return axios.get(`movie/${id}`, {
      params: {
        api_key: apiKey,
      },
    });
  },
};
