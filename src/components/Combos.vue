<template>
  <div v-if="data" class="flex flex-wrap">
    <template v-for="(pokeNove, i) in data" v-bind:key="i">
      <router-link
        v-bind:to="{
          name: 'PokemonMove',
          params: { name: pokeNove.name },
        }"
        class="p-1 m-1 bg-slate-50 rounded-md hover:bg-red-400 hover:text-yellow-200 duration-150 ease-in-out"
      >
        {{ pokeNove.name.replaceAll('-', ' ') }}
      </router-link>
    </template>
  </div>
  <div v-else>no Info</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { ContestType } from '../types/pokemonMoveRes'

defineProps<{
  data: ContestType[] | undefined | null
}>()
</script>

<style lang="scss" scoped></style>
