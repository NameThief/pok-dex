<template>
    <div>
      <input v-model="searchTerm" @input="searchPokemon" placeholder="Nom du Pokémon" />
      <div v-if="loading">Chargement en cours...</div>
      <div v-else-if="pokemon">
        <h2>{{ pokemon.name }}</h2>
        <p>HP: {{ getStat('hp') }}</p>
        <p>Attaque: {{ getStat('attack') }}</p>
        <p>Défense: {{ getStat('defense') }}</p>
        <p>Attaque Spéciale: {{ getStat('special-attack') }}</p>
        <p>Défense Spéciale: {{ getStat('special-defense') }}</p>
        <p>Vitesse: {{ getStat('speed') }}</p>
        <img v-if="pokemonSpritePath" :src="pokemonSpritePath" alt="Sprite du Pokémon" />
  <div v-else>
    Sprite non disponible
  </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      searchTerm: "",
      pokemon: null,
      loading: false,
      pokemonSpritePath: "",
    };
  },
  methods: {
    searchPokemon() {
      console.log("Recherche en cours pour:", this.searchTerm);

      if (this.searchTerm === "") {
        this.pokemon = null;
        return;
      }

      this.loading = true;

      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.searchTerm}`)
        .then(response => {
          this.pokemon = response.data;
          const spriteNumber = this.pokemon.id;
          this.pokemonSpritePath = `/showdown/${spriteNumber}.gif`;
          this.loading = false;
        })
        .catch(error => {
          console.error("Erreur lors de la recherche de Pokémon", error);
          this.loading = false;
        });
    },
    getStat(statName) {
      const stat = this.pokemon.stats.find(s => s.stat.name === statName);
      return stat ? stat.base_stat : 'N/A';
    }
  }
};
</script>