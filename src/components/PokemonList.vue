<template>
  <div class="liste">
    <h2>Liste des Pokémon</h2>
    <ul v-if="pokemonList.length > 0">
      <li v-for="pokemon in pokemonList" :key="pokemon.id">
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" alt="Sprite du Pokémon" />
      </li>
    </ul>
    <p v-else>Aucun Pokémon trouvé.</p>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemonList: [],
    };
  },
  mounted() {
    this.fetchPokemonList();
  },
  methods: {
    fetchPokemonList() {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(async response => {
          const pokemonDetailsPromises = response.data.results.map(async pokemon => {
            const detailedResponse = await axios.get(pokemon.url);
            return detailedResponse.data;
          });

          const pokemonDetails = await Promise.all(pokemonDetailsPromises);
          console.log(pokemonDetails);
          this.pokemonList = pokemonDetails;
        })
        .catch(error => {
          console.error("Erreur lors de la récupération de la liste des Pokémon", error);
        });
    },
    getStat(pokemon, statName) {
      return 'N/A';
    },
  },
};
</script>