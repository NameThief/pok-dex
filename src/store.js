import { createStore } from 'vuex';

export default createStore({
  state: {
    pokemonList: [],
  },
  mutations: {
    setPokemonList(state, list) {
      state.pokemonList = list;
    },
  },
});
