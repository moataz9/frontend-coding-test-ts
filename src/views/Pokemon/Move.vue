<template>
  <div class="w-full">
    <h1 class="text-center text-5xl text-yellow-800 mt-5">
      {{ pokemonMoveData?.name.replaceAll('-', ' ') }} Pokemon Move
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
          <td class="border p-3 border-yellow-900 font-bold">Effect</td>
          <td class="border p-3 border-yellow-900 font-semibold">
            {{
              pokemonMoveData?.effect_entries
                .filter((pa) => pa.language.name === 'en')
                .map((pa) => pa.effect)
                .join(', ')
            }}
          </td>
        </tr>
        <!-- Contest Combos -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Contest Combos</td>
          <td class="border border-yellow-900 font-semibold">
            <table class="text-left w-full">
              <tbody>
                <tr>
                  <td class="w-[10%] border border-yellow-900 px-2">
                    <span class="font-bold">normal Combas :</span>
                  </td>
                  <td class="border border-yellow-900 font-semibold">
                    <tr>
                      <td class="border p-3 border-yellow-900 font-bold">
                        Before
                      </td>
                      <td class="border p-3 border-yellow-900">
                        <Combos
                          v-bind:data="
                            pokemonMoveData?.contest_combos.normal.use_before
                          "
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-3 border-yellow-900 font-bold">
                        After
                      </td>
                      <td class="border p-3 border-yellow-900 font-bold w-full">
                        <Combos
                          v-bind:data="
                            pokemonMoveData?.contest_combos.normal.use_after
                          "
                        />
                      </td>
                    </tr>
                  </td>
                </tr>
                <tr>
                  <td class="w-[10%] border border-yellow-900 px-2">
                    <span class="font-bold">Super Combas :</span>
                  </td>
                  <td class="border border-yellow-900 font-bold">
                    <tr>
                      <td class="border p-3 border-yellow-900 font-bold">
                        Before
                      </td>
                      <td class="border p-3 border-yellow-900">
                        <Combos
                          v-bind:data="
                            pokemonMoveData?.contest_combos.super.use_before
                          "
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="border p-3 border-yellow-900 font-bold">
                        After
                      </td>
                      <td class="border p-3 border-yellow-900 font-bold w-full">
                        <Combos
                          v-bind:data="
                            pokemonMoveData?.contest_combos.super.use_after
                          "
                        />
                      </td>
                    </tr>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <!-- Contest Type -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Contest Type</td>
          <td class="border p-3 border-yellow-900 font-semibold">
            {{ pokemonMoveData?.contest_type.name }}
          </td>
        </tr>
        <!-- Damage class -->
        <tr>
          <td class="border p-3 border-yellow-900 font-bold">Damage class</td>
          <td class="border p-3 border-yellow-900 font-semibold">
            {{ pokemonMoveData?.damage_class.name }}
          </td>
        </tr>
        <!-- Flavor -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Flavors
          </td>
          <td class="border p-3 border-yellow-900 align-top font-semibold">
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
          <td class="border p-3 border-yellow-900 align-top font-semibold">
            {{ pokemonMoveData?.generation.name.replaceAll('-', ' ') }}
          </td>
        </tr>
        <!-- Stat Changes -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Stat Changes
          </td>
          <td class="border p-3 border-yellow-900 align-top">
            <ul class="list-disc list-inside text-left px-3">
              <RouterLink
                v-for="(PA, i) in pokemonMoveData?.stat_changes"
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
            <div
              v-if="!pokemonMoveData?.stat_changes.length"
              class="font-semibold"
            >
              No Stat Changes
            </div>
          </td>
        </tr>
        <!-- Target -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">
            Target
          </td>
          <td class="border p-3 border-yellow-900 align-top font-semibold">
            {{ pokemonMoveData?.target.name.replaceAll('-', ' ') }}
          </td>
        </tr>
        <!-- Type -->
        <tr>
          <td class="border p-3 border-yellow-900 align-top font-bold">Type</td>
          <td class="border p-3 border-yellow-900 align-top font-semibold">
            {{ pokemonMoveData?.type.name.replaceAll('-', ' ') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { ref, inject, onMounted } from 'vue'
import type { AxiosStatic, AxiosResponse } from 'axios'
import type { pokemonMoveRes } from '../../types/pokemonMoveRes'
import Combos from '../../components/Combos.vue'

type FlavGroups = { [key: string]: string[] }

const route = useRoute()
const router = useRouter()

const axios = inject<AxiosStatic>('axios')!

const pokemonMoveData = ref<pokemonMoveRes>()
const flavorsGroups = ref<FlavGroups>({})

const getPokemonMove = async (routeToName?: string) => {
  try {
    const res: AxiosResponse<pokemonMoveRes> = await axios.get(
      `/move/${routeToName || route.params.name}/`,
    )
    const resData = res.data
    pokemonMoveData.value = resData
  } catch (err) {
    router.push({ name: 'PokemonError', params: { name: route.params.name } })
  }
}

function setupFlavors() {
  const enFlavors =
    pokemonMoveData.value?.flavor_text_entries.filter(
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
  await getPokemonMove()
  setupFlavors()
})

onBeforeRouteUpdate(async (to, from) => {
  if (to.name === from.name)
    if (to.params.name !== from.params.name) {
      await getPokemonMove(to.params.name as string)
      setupFlavors()
    }
})
</script>

<style lang="scss" scoped></style>
