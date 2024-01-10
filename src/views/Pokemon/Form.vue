<template>
  <div class="w-full">
    <h1 class="text-center text-5xl text-yellow-800 mt-5">
      {{ pokemonFormData?.name.replaceAll('-', ' ') }} Pokemon Form
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
        <!-- Battle Only -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Battle Only</td>
          <td class="border p-3 border-yellow-900 font-medium">
            {{ pokemonFormData?.is_battle_only ? 'YES' : 'NO' }}
          </td>
        </tr>
        <!-- Default -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Default</td>
          <td class="border p-3 border-yellow-900 font-medium">
            {{ pokemonFormData?.is_default ? 'YES' : 'NO' }}
          </td>
        </tr>
        <!-- Mega -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Mega</td>
          <td class="border p-3 border-yellow-900 font-medium">
            {{ pokemonFormData?.is_mega ? 'YES' : 'NO' }}
          </td>
        </tr>
        <!-- Pokemon -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Pokemon</td>
          <td class="border p-3 border-yellow-900 font-medium">
            <router-link
              v-bind:to="{
                name: 'Pokemon',
                params: { name: pokemonFormData?.pokemon.name },
              }"
              class="p-1 m-1 bg-slate-50 rounded-md hover:bg-red-400 hover:text-yellow-200 duration-150 ease-in-out"
            >
              {{ pokemonFormData?.pokemon.name.replaceAll('-', ' ') }}
            </router-link>
          </td>
        </tr>
        <!-- sprities Images -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">
            sprities Images
          </td>
          <td class="border p-3 border-yellow-900 font-bold">
            <ul class="list-none list-inside text-left px-3 flex flex-wrap">
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
        </tr>
        <!-- Types -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Types</td>
          <td class="border p-3 border-yellow-900 font-bold">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-for="(PA, i) in pokemonFormData?.types"
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
        <!-- Version Group -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Version Group</td>
          <td class="border p-3 border-yellow-900 font-bold">
            {{ pokemonFormData?.version_group.name.replaceAll('-', ' ') }}
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
import type { pokemonFormRes } from '../../types/pokemonFormRes'
import useToast from '../../composables/useToast'

const route = useRoute()
const router = useRouter()

const axios = inject<AxiosStatic>('axios')!

const { callToast } = useToast()

const pokemonFormData = ref<pokemonFormRes>()
const spritiesImages = ref<string[]>([])

const getPokemonForm = async () => {
  try {
    const res: AxiosResponse<pokemonFormRes> = await axios.get(
      `/pokemon-form/${route.params.name}/`,
    )
    const resData = res.data
    pokemonFormData.value = resData
    spritiesImages.value = Object.values(resData.sprites).filter(
      (img) => typeof img === 'string' && img,
    )
    callToast('Success: Pokemon Form data Fetched')
  } catch (err) {
    callToast('Error: Pokemon Form data Failed', 'red')
    router.push({ name: 'PokemonError', params: { name: route.params.name } })
  }
}

onMounted(async () => {
  await getPokemonForm()
})
</script>

<style lang="scss" scoped></style>
