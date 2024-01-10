<template>
  <div class="w-full">
    <h1 class="text-center text-5xl text-yellow-800 mt-5">
      {{ pokemonSpiciesData?.name.replaceAll('-', ' ') }} Pokemon Spicies
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
        <!-- Color -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Color
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.color.name.replaceAll('-', ' ') }}
          </td>
        </tr>
        <!-- Egg Groups -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Egg Groups
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            <ul class="list-disc list-inside text-left">
              <li
                v-for="(PA, i) in pokemonSpiciesData?.egg_groups"
                v-bind:key="i"
                class="pb-1"
              >
                {{ PA.name.replaceAll('-', ' ') }}
              </li>
            </ul>
          </td>
        </tr>
        <!-- Evolves From Species -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Evolves From Species
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.evolves_from_species.name }}
          </td>
        </tr>
        <!-- Flavors -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Flavors
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
        <!-- Genera -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Genera
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{
              pokemonSpiciesData?.genera.find((pa) => pa.language.name === 'en')
                ?.genus
            }}
          </td>
        </tr>
        <!-- Generation -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Generation
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.generation.name.replaceAll('-', ' ') }}
          </td>
        </tr>
        <!-- Growth Rate -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Growth Rate
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.growth_rate.name.replaceAll('-', ' ') }}
          </td>
        </tr>
        <!-- Habitat -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Habitat
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.habitat.name.replaceAll('-', ' ') }}
          </td>
        </tr>
        <!-- Has Gender Differences -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Has Gender Differences
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.has_gender_differences ? 'Yes' : 'No' }}
          </td>
        </tr>
        <!-- Is Baby -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Is Baby
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.is_baby ? 'Yes' : 'No' }}
          </td>
        </tr>
        <!-- Is Legendary -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Is Legendary
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.is_legendary ? 'Yes' : 'No' }}
          </td>
        </tr>
        <!-- Is Mythical -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Is Mythical
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.is_mythical ? 'Yes' : 'No' }}
          </td>
        </tr>
        <!-- Hatch Counter -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Hatch Counter
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.hatch_counter }}
          </td>
        </tr>
        <!-- Pokedex -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Pokedex
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            <ul class="list-disc list-inside text-left">
              <li
                v-for="(PA, i) in pokemonSpiciesData?.pokedex_numbers"
                v-bind:key="i"
                class="pb-1"
              >
                {{ PA.pokedex.name.replaceAll('-', ' ') }}
              </li>
            </ul>
          </td>
        </tr>
        <!-- Shape -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Shape
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            {{ pokemonSpiciesData?.shape.name.replaceAll('-', ' ') }}
          </td>
        </tr>
        <!-- Varieties -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Varieties
          </td>
          <td class="border p-3 border-yellow-900 align-top font-medium">
            <div class="flex flex-wrap">
              <router-link
                v-for="(poke, i) in pokemonSpiciesData?.varieties"
                v-bind:key="i"
                v-bind:to="{
                  name: 'Pokemon',
                  params: { name: poke.pokemon.name },
                }"
                class="p-1 m-1 bg-slate-50 rounded-md hover:bg-red-400 hover:text-yellow-200 duration-150 ease-in-out"
              >
                {{ poke.pokemon.name.replaceAll('-', ' ') }}
              </router-link>
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
import type { PokemonSpiciesRes } from '../../types/pokemonSpiciesRes'
import useToast from '../../composables/useToast'

type FlavGroups = { [key: string]: string[] }

const route = useRoute()
const router = useRouter()

const { callToast } = useToast()

const axios = inject<AxiosStatic>('axios')!

const pokemonSpiciesData = ref<PokemonSpiciesRes>()
const flavorsGroups = ref<FlavGroups>({})

const getPokemonSpices = async () => {
  try {
    const res: AxiosResponse<PokemonSpiciesRes> = await axios.get(
      `/pokemon-species/${route.params.name}/`,
    )
    const resData = res.data
    pokemonSpiciesData.value = resData
    callToast('Success: Pokemon Specy data Fetched')
  } catch (err) {
    callToast('Error: Pokemon Specy data Failed', 'red')
    router.push({ name: 'PokemonError', params: { name: route.params.name } })
  }
}

function setupFlavors() {
  const enFlavors =
    pokemonSpiciesData.value?.flavor_text_entries.filter(
      (pa) => pa.language.name === 'en',
    ) || []

  // eslint-disable-next-line no-restricted-syntax
  for (const flavor of enFlavors) {
    const flavName = flavor.version.name
    if (flavorsGroups.value[flavName])
      flavorsGroups.value[flavName].push(flavor.flavor_text)
    else flavorsGroups.value[flavName] = [flavor.flavor_text] as string[]
  }
}

onMounted(async () => {
  await getPokemonSpices()
  setupFlavors()
})
</script>

<style lang="scss" scoped></style>
