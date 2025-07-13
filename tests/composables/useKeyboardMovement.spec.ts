import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import { defineComponent } from 'vue'
import { useGameStore } from '../../src/store/game'
import { useKeyboardMovement } from '../../src/composables/useKeyboardMovement'

const TestComponent = defineComponent({
  setup() {
    const game = useGameStore()
    useKeyboardMovement(game.move)
    return {}
  },
  template: '<div>Test</div>'
})

describe('useKeyboardMovement', () => {
  it('triggers movement on WASD and arrow keys', async () => {
    const pinia = createTestingPinia({ stubActions: false, createSpy: vi.fn })
    render(TestComponent, { global: { plugins: [pinia] } })
    const game = useGameStore()

    await fireEvent.keyDown(window, { key: 'ArrowUp' })
    expect(game.move).toHaveBeenCalledWith('north')

    await fireEvent.keyDown(window, { key: 'd' })
    expect(game.move).toHaveBeenCalledWith('east')
  })

  it('ignores unrelated keys', async () => {
    const pinia = createTestingPinia({ stubActions: false, createSpy: vi.fn })
    render(TestComponent, { global: { plugins: [pinia] } })
    const game = useGameStore()

    await fireEvent.keyDown(window, { key: 'x' })
    expect(game.move).not.toHaveBeenCalled()
  })
})
