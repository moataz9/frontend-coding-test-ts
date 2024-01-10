<template>
  <div>
    <h1 class="text-6xl mt-4 text-red-600">Not Found 404</h1>
    <h2 class="text-4xl mt-4 text-red-600">
      We're Sorry, There are an Error Fetching <br />
      Pokemon {{ route.params.name }} data
    </h2>
    <button
      class="p-4 m-4 bg-slate-950 text-white text-xl rounded-md hover:bg-red-400 hover:text-yellow-200 duration-150 ease-in-out"
      v-on:click="router.push({ name: 'Pokemons' })"
    >
      go Pokemons
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<style lang="scss" scoped></style>
