import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'

import LayoutMain from '../components/layout/LayoutMain.vue'

import Error from '../views/Error.vue'
import Home from '../views/Home.vue'
import Pokemons from '../views/Pokemons.vue'
import Pokemon from '../views/Pokemon/Index.vue'
import PokemonAbility from '../views/Pokemon/Ability.vue'
import PokemonForm from '../views/Pokemon/Form.vue'
import PokemonHeld from '../views/Pokemon/Held.vue'
import PokemonMove from '../views/Pokemon/Move.vue'
import PokemonSpecy from '../views/Pokemon/Specy.vue'
import PokemonState from '../views/Pokemon/State.vue'
import PokemonType from '../views/Pokemon/Type.vue'
import PokemonError from '../views/Pokemon/Error.vue'

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    props: true,
    component: Pokemons,
  },
  {
    path: '/pokemon-:name',
    name: 'Pokemon',
    props: true,
    component: Pokemon,
  },
  {
    path: '/pokemonability-:name',
    name: 'PokemonAbility',
    props: true,
    component: PokemonAbility,
  },
  {
    path: '/pokemonform-:name',
    name: 'PokemonForm',
    props: true,
    component: PokemonForm,
  },
  {
    path: '/pokemonheld-:name',
    name: 'PokemonHeld',
    props: true,
    component: PokemonHeld,
  },
  {
    path: '/pokemonmove-:name',
    name: 'PokemonMove',
    props: true,
    component: PokemonMove,
  },
  {
    path: '/pokemonspecy-:name',
    name: 'PokemonSpecy',
    props: true,
    component: PokemonSpecy,
  },
  {
    path: '/pokemonstate-:name',
    name: 'PokemonState',
    props: true,
    component: PokemonState,
  },
  {
    path: '/pokemontype-:name',
    name: 'PokemonType',
    props: true,
    component: PokemonType,
  },
  {
    path: '/pokemonerror-:name',
    name: 'PokemonError',
    props: true,
    component: PokemonError,
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: '/error',
    alias: '/:pathMatch(.*)*',
    name: 'Error',
    props: true,
    component: Error,
  },
  {
    path: '/',
    props: true,
    component: LayoutMain,
    children: mainRoutes,
  },
]

export default function initializeRouter(app: App): Router {
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)

  return router
}
