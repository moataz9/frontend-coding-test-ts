<template>
  <div>
    <div class="pt-4 text-red-800">
      <span class="m-2"> Pokemons Per Page:</span>

      <select v-model.number="limit" class="w-24 text-center p-2">
        <option
          v-for="i in 5"
          v-bind:key="i"
          v-bind:value="i * 10"
          v-bind:selected="i === 1"
        >
          {{ i * 10 }}
        </option>
      </select>
    </div>

    <div class="flex flex-wrap justify-center max-w-4xl">
      <router-link
        v-for="(poke, i) in pokemons"
        v-bind:key="i"
        v-bind:to="{ name: 'Pokemon', params: { name: poke.name } }"
        class="p-4 m-4 bg-slate-50 rounded-md hover:bg-red-400 hover:text-yellow-200 duration-150 ease-in-out"
      >
        {{ poke.name.replaceAll('-', ' ') }}
      </router-link>
    </div>
    <div>
      <button
        class="rounded-full bg-slate-800 w-8 h-8 text-yellow-500 text-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        v-bind:disabled="!hasNext"
        v-on:click="page++"
      >
        &larr;
      </button>
      <span class="p-2">{{ page + 1 }}</span>
      <button
        class="rounded-full bg-slate-800 w-8 h-8 text-yellow-500 text-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        v-bind:disabled="!hasPerv"
        v-on:click="page--"
      >
        &rarr;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, watch, computed } from 'vue'
import type { AxiosStatic, AxiosResponse } from 'axios'
import { getIdFromUrl } from '../utils'
import type { pokemonsRes, pokemon } from '../types'

const axios = inject<AxiosStatic>('axios')!
const pokemons = ref<pokemon[]>([])
const limit = ref(10)
const page = ref(0)
const hasPerv = ref(false)
const hasNext = ref(true)

const offset = computed(() => limit.value * page.value)

const getPokemons = async () => {
  try {
    const res: AxiosResponse<pokemonsRes> = await axios.get('/pokemon/', {
      params: { limit: limit.value, offset: offset.value },
    })
    const resData = res.data
    pokemons.value = resData.results
    hasPerv.value = Boolean(resData.previous)
    hasNext.value = Boolean(resData.next)
  } catch (err) {
    console.log(err)
  }
}

watch([limit, page], async (val) => val && getPokemons())

onMounted(async () => {
  await getPokemons()
})
</script>

<style lang="scss" scoped></style>
