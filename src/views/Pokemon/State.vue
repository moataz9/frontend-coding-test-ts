<template>
  <div class="w-full">
    <h1 class="text-center text-5xl text-yellow-800 mt-5">
      {{ pokemonStatData?.name.replaceAll('-', ' ') }} Pokemon Stat
    </h1>
    <table class="border p-3 mx-auto mt-5 border-yellow-900 w-full lg:w-[80vw]">
      <thead class="border p-3 border-yellow-900">
        <tr>
          <th class="border p-3 border-yellow-900 text-center" colspan="2">
            Affecting Moves
          </th>
          <th class="border p-3 border-yellow-900 text-center" colspan="2">
            Affecting Natures
          </th>
          <th class="border p-3 border-yellow-900 text-center" rowspan="2">
            Battle Only
          </th>
          <th class="border p-3 border-yellow-900 text-center" rowspan="2">
            Move Demage Class
          </th>
        </tr>
        <tr>
          <th class="border p-3 border-yellow-900 text-left">Decrease</th>
          <th class="border p-3 border-yellow-900 text-left">Increase</th>
          <th class="border p-3 border-yellow-900 text-left">Decrease</th>
          <th class="border p-3 border-yellow-900 text-left">Increase</th>
        </tr>
        <!-- </th> -->
      </thead>
      <tbody>
        <tr>
          <!-- Affecting Moves Decrease -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonStatData?.affecting_moves.decrease"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.move.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.move.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div v-if="!pokemonStatData?.affecting_moves.decrease.length">
              No Info
            </div>
          </td>
          <!-- Affecting Moves Increase -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonStatData?.affecting_moves.increase"
                v-bind:key="i"
                class="pb-1"
              >
                <RouterLink
                  v-bind:to="{
                    name: 'PokemonMove',
                    params: { name: PA.move.name },
                  }"
                >
                  <span class="underline underline-offset-2 text-blue-500">
                    {{ PA.move.name.replaceAll('-', ' ') }}
                  </span>
                </RouterLink>
              </li>
            </ul>
            <div v-if="!pokemonStatData?.affecting_moves.increase.length">
              No Info
            </div>
          </td>
          <!-- Affecting Natures Decrease -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonStatData?.affecting_natures.decrease"
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
            <div v-if="!pokemonStatData?.affecting_natures.decrease.length">
              No Info
            </div>
          </td>
          <!-- Affecting Natures Increase -->
          <td class="border border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <li
                v-for="(PA, i) in pokemonStatData?.affecting_natures.increase"
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
            <div v-if="!pokemonStatData?.affecting_moves.increase.length">
              No Info
            </div>
          </td>
          <!-- Battle Only -->
          <td class="border border-yellow-900 align-top font-semibold">
            {{ pokemonStatData?.is_battle_only ? 'YES' : 'NO' }}
          </td>
          <!-- Move Damage Class -->
          <td class="border border-yellow-900 align-top font-semibold">
            {{ pokemonStatData?.move_damage_class.name.replaceAll('-', ' ') }}
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
import type { PokemonStatRes } from '../../types/pokemonStatRes'
import useToast from '../../composables/useToast'

const route = useRoute()
const router = useRouter()

const axios = inject<AxiosStatic>('axios')!

const { callToast } = useToast()

const pokemonStatData = ref<PokemonStatRes>()

const getPokemonStat = async () => {
  try {
    const res: AxiosResponse<PokemonStatRes> = await axios.get(
      `/stat/${route.params.name}/`,
    )
    const resData = res.data
    pokemonStatData.value = resData
    callToast('Success: Pokemon Stat data Fetched')
  } catch (err) {
    callToast('Error: Pokemon Stat data Failed', 'red')
    router.push({ name: 'PokemonError', params: { name: route.params.name } })
  }
}

onMounted(async () => {
  await getPokemonStat()
})
</script>

<style lang="scss" scoped></style>
