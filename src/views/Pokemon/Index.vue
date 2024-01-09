<template>
  <div class="w-full">
    <h1 class="text-center text-5xl text-yellow-800 mt-5">
      {{ pokemonData?.name.replaceAll('-', ' ') }} Pokemon
    </h1>

    <table class="border p-3 mx-auto mt-5 border-yellow-900">
      <thead class="border p-3 border-yellow-900">
        <tr>
          <th class="border p-3 border-yellow-900">Abilities</th>
          <th class="border p-3 border-yellow-900">Forms</th>
          <th class="border p-3 border-yellow-900">Game Indices</th>
          <th class="border p-3 border-yellow-900">height</th>
          <th class="border p-3 border-yellow-900">weight</th>
          <th class="border p-3 border-yellow-900">Base Experience</th>
          <th class="border p-3 border-yellow-900">held Items</th>
          <th class="border p-3 border-yellow-900">moves</th>
          <th class="border p-3 border-yellow-900">Species</th>
          <th class="border p-3 border-yellow-900">sprities</th>
          <th class="border p-3 border-yellow-900">stats</th>
          <th class="border p-3 border-yellow-900">types</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- Abilities -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-for="(PA, i) in pokemonData?.abilities"
                v-bind:key="i"
                v-bind:to="{
                  name: 'PokemonAbility',
                  params: { name: PA.ability.name },
                }"
              >
                <li class="pb-1">
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.ability.name.replaceAll('-', ' ') }}
                  </span>
                </li>
              </RouterLink>
            </ul>
          </td>
          <!-- Forms -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-for="(PA, i) in pokemonData?.forms"
                v-bind:key="i"
                v-bind:to="{
                  name: 'PokemonForm',
                  params: { name: PA.name },
                }"
              >
                <li class="pb-1">
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.name.replaceAll('-', ' ') }}
                  </span>
                </li>
              </RouterLink>
            </ul>
          </td>
          <!-- Game Indices -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonData?.game_indices"
                v-bind:key="i"
                class="pb-1"
              >
                {{ PA.version.name.replaceAll('-', ' ') }}
              </li>
            </ul>
          </td>
          <!-- height -->
          <td class="border border-yellow-900 align-top">
            {{ pokemonData?.height }}
          </td>
          <!-- weight -->
          <td class="border border-yellow-900 align-top">
            {{ pokemonData?.weight }}
          </td>
          <!-- base experience -->
          <td class="border border-yellow-900 align-top">
            {{ pokemonData?.base_experience }}
          </td>
          <!-- held Items -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-for="(PA, i) in pokemonData?.held_items"
                v-bind:key="i"
                v-bind:to="{
                  name: 'PokemonHeld',
                  params: { name: PA.item.name },
                }"
              >
                <li class="pb-1">
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.item.name.replaceAll('-', ' ') }}
                  </span>
                </li>
              </RouterLink>
            </ul>
          </td>
          <!-- moves -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-for="(PA, i) in pokemonData?.moves"
                v-bind:key="i"
                v-bind:to="{
                  name: 'PokemonMove',
                  params: { name: PA.move.name },
                }"
              >
                <li class="pb-1">
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.move.name.replaceAll('-', ' ') }}
                  </span>
                </li>
              </RouterLink>
            </ul>
          </td>
          <!-- Species -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-bind:to="{
                  name: 'PokemonSpecy',
                  params: { name: pokemonData?.species.name },
                }"
              >
                <li class="pb-1">
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ pokemonData?.species.name.replaceAll('-', ' ') }}
                  </span>
                </li>
              </RouterLink>
            </ul>
          </td>
          <!-- sprities -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-none list-inside text-left px-3">
              <li v-for="(spriteImage, i) in spritiesImages" v-bind:key="i">
                <img
                  v-bind:src="spriteImage"
                  v-bind:alt="'item' + i"
                  width="80"
                  height="80"
                />
              </li>
            </ul>
          </td>
          <!-- stats -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-for="(PA, i) in pokemonData?.stats"
                v-bind:key="i"
                v-bind:to="{
                  name: 'PokemonState',
                  params: { name: PA.stat.name },
                }"
              >
                <li class="pb-1">
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.stat.name.replaceAll('-', ' ') }}
                  </span>
                </li>
              </RouterLink>
            </ul>
          </td>
          <!-- types -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-for="(PA, i) in pokemonData?.types"
                v-bind:key="i"
                v-bind:to="{
                  name: 'PokemonType',
                  params: { name: PA.type.name },
                }"
              >
                <li class="pb-1">
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.type.name.replaceAll('-', ' ') }}
                  </span>
                </li>
              </RouterLink>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, inject, onMounted } from 'vue'

import type { AxiosStatic, AxiosResponse } from 'axios'
import type { PokemonRes } from '../../types/pokemonRes'

const route = useRoute()
const router = useRouter()

const axios = inject<AxiosStatic>('axios')!
const pokemonData = ref<PokemonRes>()
const spritiesImages = ref<string[]>([])

const getPokemon = async () => {
  try {
    const res: AxiosResponse<PokemonRes> = await axios.get(
      `/pokemon/${route.params.name}/`,
    )
    const resData = res.data
    pokemonData.value = resData
    spritiesImages.value = Object.values(resData.sprites).filter(
      (img) => typeof img === 'string' && img,
    )
  } catch (err) {
    router.push({ name: 'PokemonError', params: { name: route.params.name } })
  }
}

onMounted(async () => {
  await getPokemon()
})
</script>

<style lang="scss" scoped></style>
