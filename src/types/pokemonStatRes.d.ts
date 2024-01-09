/* eslint-disable no-use-before-define */
export interface PokemonStatRes {
  affecting_moves: AffectingMoves
  affecting_natures: AffectingNatures
  characteristics: Characteristic[]
  game_index: number
  id: number
  is_battle_only: boolean
  move_damage_class: MoveDamageClass
  name: string
  names: Name[]
}

export interface AffectingMoves {
  decrease: Crease[]
  increase: Crease[]
}

export interface Crease {
  change: number
  move: MoveDamageClass
}

export interface MoveDamageClass {
  name: string
  url: string
}

export interface AffectingNatures {
  decrease: MoveDamageClass[]
  increase: MoveDamageClass[]
}

export interface Characteristic {
  url: string
}

export interface Name {
  language: MoveDamageClass
  name: string
}
