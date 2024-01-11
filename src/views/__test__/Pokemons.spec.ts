// Pokemons.spec.ts
import { render, screen } from '@testing-library/vue'
import Pokemons from '../Pokemons.vue'

describe('Pokemons', () => {
  it('renders with Pokemons Per Page text', async () => {
    render(Pokemons)

    expect(screen.getByText((con) => con.startsWith('Pokemons'))).toBeDefined()
  })
})
