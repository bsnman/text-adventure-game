import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { nextTick } from 'vue'
import { createTestingPinia } from '@pinia/testing'
import CharacterPanel from '../CharacterPanel.vue'
import { usePlayerStore } from '../../store/player'

function renderPanel() {
  const pinia = createTestingPinia({ stubActions: false, createSpy: vi.fn })
  const utils = render(CharacterPanel, { global: { plugins: [pinia] } })
  return { ...utils, pinia }
}

describe('CharacterPanel', () => {
  it('displays player attributes', async () => {
    const { getByText } = renderPanel()
    const store = usePlayerStore()
    getByText(`Strength:`)
    store.strength = 10
    await nextTick()
    getByText('10')
  })
})
