/* eslint-disable no-restricted-syntax */
import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/vue'
import CombosComp from '../Combos.vue'

describe('Combos Compoent', () => {
  it('renders no Info when data is undefined', () => {
    render(CombosComp, {
      props: {
        data: undefined,
      },
    })

    expect(screen.getByText('no Info')).toBeDefined()
  })

  it('renders no Info when data is null', () => {
    render(CombosComp, {
      props: {
        data: null,
      },
    })

    expect(screen.getByText('no Info')).toBeDefined()
  })

  it('renders no Info when data is an empty array', () => {
    render(CombosComp, {
      props: {
        data: [],
      },
    })

    expect(screen.getByText('no Info')).toBeDefined()
  })

  it('renders Pokemon Move links when data is provided', () => {
    const data = [{ name: 'move-1' }, { name: 'move-2' }]

    render(CombosComp, {
      props: {
        data,
      },
    })

    // Check if Pokemon links are rendered
    for (const poke of data) {
      const expectedName = poke.name.replaceAll('-', ' ')
      expect(screen.getByText(expectedName)).toBeDefined()
    }

    // Check if "no Info" is not rendered
    expect(screen.queryByText('no Info')).toBeFalsy()
  })
})
