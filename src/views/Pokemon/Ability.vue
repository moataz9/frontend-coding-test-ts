<template>
  <div class="w-full">
    <h1 class="text-center text-5xl text-yellow-800 mt-5">
      {{ pokemonAbilityData?.name.replaceAll('-', ' ') }} Pokemon Ability
    </h1>
    <table
      class="border p-3 mx-auto mt-5 text-left border-yellow-900 w-full lg:w-[80vw]"
    >
      <thead class="border p-3 border-yellow-900">
        <tr>
          <th class="border p-3 border-yellow-900 min-w-[10%]">Detail</th>
          <th class="border p-3 border-yellow-900">Info</th>
        </tr>
      </thead>
      <tbody>
        <!-- Effect -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Effect
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{
              pokemonAbilityData?.effect_entries
                .filter((pa) => pa.language.name === 'en')
                .map((pa) => pa.effect)
                .join(', ')
            }}
          </td>
        </tr>
        <!-- Flavor -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Flavor
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            <ul class="list-disc list-inside text-left">
              <li
                v-for="(flav, i) in Object.keys(flavorsGroups)"
                v-bind:key="i"
              >
                <span class="font-bold">{{ flav.replaceAll('-', ' ') }}</span>
                <ul class="list-disc list-inside text-left ps-4">
                  <li v-for="(f, i1) in flavorsGroups[flav]" v-bind:key="i1">
                    {{ f }}
                  </li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <!-- Generation -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Generation
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonAbilityData?.generation.name.replaceAll('-', ' ') }}
          </td>
        </tr>
        <!-- Pokemons Using It -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Pokemons Using It
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            <div class="flex flex-wrap">
              <template
                v-for="(poke, i) in pokemonAbilityData?.pokemon"
                v-bind:key="i"
              >
                <router-link
                  v-if="!poke.is_hidden"
                  v-bind:to="{
                    name: 'Pokemon',
                    params: { name: poke.pokemon.name },
                  }"
                  class="p-1 m-1 bg-slate-50 rounded-md hover:bg-red-400 hover:text-yellow-200 duration-150 ease-in-out"
                >
                  {{ poke.pokemon.name.replaceAll('-', ' ') }}
                </router-link>
              </template>
            </div>
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
import type { PokemonAbilityRes } from '../../types/pokemonAbilityRes'

type FlavGroups = { [key: string]: string[] }

const route = useRoute()
const router = useRouter()

const axios = inject<AxiosStatic>('axios')!

const pokemonAbilityData = ref<PokemonAbilityRes>()
const flavorsGroups = ref<FlavGroups>({})

const getPokemonAbility = async () => {
  try {
    const res: AxiosResponse<PokemonAbilityRes> = await axios.get(
      `/ability/${route.params.name}/`,
    )
    const resData = res.data
    pokemonAbilityData.value = resData
  } catch (err) {
    router.push({ name: 'PokemonError', params: { name: route.params.name } })
  }
}

function setupFlavors() {
  const enFlavors =
    pokemonAbilityData.value?.flavor_text_entries.filter(
      (pa) => pa.language.name === 'en',
    ) || []

  // eslint-disable-next-line no-restricted-syntax
  for (const flavor of enFlavors) {
    const flavName = flavor.version_group.name
    if (flavorsGroups.value[flavName])
      flavorsGroups.value[flavName].push(flavor.flavor_text)
    else flavorsGroups.value[flavName] = [flavor.flavor_text] as string[]
  }
}

onMounted(async () => {
  await getPokemonAbility()
  setupFlavors()
})
</script>

<style lang="scss" scoped></style>
