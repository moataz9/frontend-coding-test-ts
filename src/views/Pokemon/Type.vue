<template>
  <div class="w-full">
    <h1 class="text-center text-5xl text-yellow-800 mt-5">
      {{ pokemonTypeData?.name.replaceAll('-', ' ') }} Pokemon Type
    </h1>
    <table class="border p-3 mx-auto mt-5 border-yellow-900 w-full lg:w-[80vw]">
      <thead class="border p-3 border-yellow-900">
        <tr>
          <th class="border p-3 border-yellow-900 text-center" colspan="6">
            Damage Relations
          </th>
          <th class="border p-3 border-yellow-900 text-center" rowspan="3">
            Game Indices
          </th>
          <th class="border p-3 border-yellow-900 text-center" rowspan="3">
            Generation
          </th>
          <th class="border p-3 border-yellow-900 text-center" rowspan="3">
            Move Demage Class
          </th>
          <th class="border p-3 border-yellow-900 text-center" rowspan="3">
            Moves
          </th>
          <th class="border p-3 border-yellow-900 text-center" rowspan="3">
            pokemons
          </th>
        </tr>
        <tr>
          <th class="border p-3 border-yellow-900 text-center" colspan="2">
            Double Damge
          </th>
          <th class="border p-3 border-yellow-900 text-center" colspan="2">
            Half Damge
          </th>
          <th class="border p-3 border-yellow-900 text-center" colspan="2">
            No Damge
          </th>
        </tr>
        <tr>
          <template v-for="i in 3" v-bind:key="i">
            <th class="border p-3 border-yellow-900 text-center">From</th>
            <th class="border p-3 border-yellow-900 text-center">To</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- damage_relations.double_damage_from -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.damage_relations
                  .double_damage_from"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div
              v-if="
                !pokemonTypeData?.damage_relations.double_damage_from.length
              "
            >
              No Info
            </div>
          </td>
          <!-- damage_relations.double_damage_to -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.damage_relations
                  .double_damage_to"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div
              v-if="!pokemonTypeData?.damage_relations.double_damage_to.length"
            >
              No Info
            </div>
          </td>
          <!-- damage_relations.half_damage_from -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.damage_relations
                  .half_damage_from"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div
              v-if="!pokemonTypeData?.damage_relations.half_damage_from.length"
            >
              No Info
            </div>
          </td>
          <!-- damage_relations.half_damage_to -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.damage_relations
                  .half_damage_to"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div
              v-if="!pokemonTypeData?.damage_relations.half_damage_to.length"
            >
              No Info
            </div>
          </td>
          <!-- damage_relations.no_damage_from -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.damage_relations
                  .no_damage_from"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div
              v-if="!pokemonTypeData?.damage_relations.no_damage_from.length"
            >
              No Info
            </div>
          </td>
          <!-- damage_relations.no_damage_to -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.damage_relations
                  .no_damage_to"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div v-if="!pokemonTypeData?.damage_relations.no_damage_to.length">
              No Info
            </div>
          </td>
          <!-- Geme indices -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.game_indices"
                v-bind:key="i"
                class="pb-1"
              >
                {{ PA.generation.name.replaceAll('-', ' ') }}
              </li>
            </ul>
            <div v-if="!pokemonTypeData?.damage_relations.no_damage_to.length">
              No Info
            </div>
          </td>
          <!-- Generation -->
          <td class="border border-yellow-900 align-top font-semibold">
            {{ pokemonTypeData?.generation.name.replaceAll('-', ' ') }}
          </td>
          <!-- Move Damage Class -->
          <td class="border border-yellow-900 align-top font-semibold">
            {{ pokemonTypeData?.move_damage_class.name.replaceAll('-', ' ') }}
          </td>
          <!-- Moves -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.moves"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div v-if="!pokemonTypeData?.moves.length">No Info</div>
          </td>
          <!-- Pokemons -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonTypeData?.pokemon"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'Pokemon',
                    params: { name: PA.pokemon.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.pokemon.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div v-if="!pokemonTypeData?.pokemon.length">No Info</div>
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
import type { PokemonTypeRes } from '../../types/pokemonTypeRes'

const route = useRoute()
const router = useRouter()

const axios = inject<AxiosStatic>('axios')!

const pokemonTypeData = ref<PokemonTypeRes>()

const getPokemonType = async () => {
  try {
    const res: AxiosResponse<PokemonTypeRes> = await axios.get(
      `/type/${route.params.name}/`,
    )
    const resData = res.data
    pokemonTypeData.value = resData
  } catch (err) {
    router.push({ name: 'PokemonError', params: { name: route.params.name } })
  }
}

onMounted(async () => {
  await getPokemonType()
})
</script>

<style lang="scss" scoped></style>
