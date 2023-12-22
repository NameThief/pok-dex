<template>
  <div id="app" class="pokedex-container">
    <h1 class="pokedex-title">Pokédex</h1>
    <button @click="goToPokemonList">Voir la liste des Pokémon</button>
    <router-view></router-view>
    <PokemonSearch />
  </div>
</template>

<script>
import PokemonSearch from "@/components/PokemonSearch.vue";
import { useRouter } from 'vue-router';

export default {
  components: {
    PokemonSearch
  },
  setup() {
    const router = useRouter();
    
    const goToPokemonList = () => {
      console.log("Méthode goToPokemonList appelée");
      router.push({ name: 'pokemon-list' });
    };

    return {
      goToPokemonList,
    };
  },
};
</script>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to right, #ffcc00, #884a21);
  color: white;
}

@media (min-width: 1024px) {
  .pokedex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

<style scoped>

.pokedex-title {
  margin-bottom: 20px;
  color: black;
}

</style>
