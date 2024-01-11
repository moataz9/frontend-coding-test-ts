/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { http, HttpResponse } from 'msw'

const apiPath = import.meta.env.VITE_POKE_API
const pokemonsData = {
  results: [
    { name: 'pokemon-1' },
    { name: 'pokemon-2' },
    { name: 'pokemon-3' },
    { name: 'pokemon-4' },
  ],
  previous: null,
  next: '/pokemon/?limit=10&offset=10',
}

export const handlers = [
  http.get(`${apiPath}/pokemon`, () => {
    return HttpResponse.json(pokemonsData)
  }),
]
