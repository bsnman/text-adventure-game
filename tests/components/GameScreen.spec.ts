import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import GameScreen from '../../src/components/GameScreen.vue'

function renderGame() {
  const pinia = createTestingPinia({ stubActions: false, createSpy: vi.fn })
  return render(GameScreen, {
    global: {
      plugins: [pinia],
      stubs: ['MapCanvas']
    }
  })
}

describe('GameScreen', () => {
  it('displays room description and moves when button clicked', async () => {
    const { getByText } = renderGame()

    getByText('dimly lit room', { exact: false })
    const btn = getByText('Go north')
    await fireEvent.click(btn)
    getByText('long hallway', { exact: false })
  })
})
