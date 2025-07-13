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
    const { getByText, getByLabelText, getAllByText } = renderGame()

    getByText('dimly lit room', { exact: false })
    const btn = getByLabelText('Go north')
    await fireEvent.click(btn)
    getAllByText('long hallway', { exact: false })
  })

  it('moves with keyboard arrows', async () => {
    const { getByText, getAllByText } = renderGame()
    getByText('dimly lit room', { exact: false })
    await fireEvent.keyDown(window, { key: 'ArrowUp' })
    getAllByText('long hallway', { exact: false })
  })
})
