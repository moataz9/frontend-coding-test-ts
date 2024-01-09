export interface pokemon {
  name: string
  url: string
}

export interface pokemonsRes {
  count: number
  next: string | null
  previous: string | null
  results: pokemon[]
}
