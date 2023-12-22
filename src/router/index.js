import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; 
import PokemonList from '../components/PokemonList.vue'; 


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/pokemon-list',
    name: 'pokemon-list',
    component: PokemonList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
