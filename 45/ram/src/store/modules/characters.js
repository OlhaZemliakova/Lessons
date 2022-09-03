import api from "../../api";

const state = {
  characters: [],
  pages: 0,
};
const getters = {
  getCharacters(state) {
    return state.characters;
  },
  // getCharacterByID
  // getFilteredCharacters
};
const mutations = {
  SET_CHARACTERS(state, payload) {
    // console.log('SET_CHARACTERS',payload)
    state.characters = payload;
  },
};
const actions = {
  getCharacters({ commit }) {
    api.getCharacters().then((resp) => {
      console.log("resp", resp);
      commit("SET_CHARACTERS", resp.data.results);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
