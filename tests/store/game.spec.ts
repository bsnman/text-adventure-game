import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from '../../src/store/game'

describe('useGameStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('moves between rooms and tracks visited coordinates', () => {
    const game = useGameStore()

    expect(game.currentRoom).toBe('start')
    expect(game.visited.start).toEqual({ x: 0, y: 0 })

    game.move('north')
    expect(game.currentRoom).toBe('walkway1')
    expect(game.visited.walkway1).toEqual({ x: 0, y: -1 })

    game.move('north')
    expect(game.currentRoom).toBe('kitchen')
    expect(game.visited.kitchen).toEqual({ x: 0, y: -2 })
  })
})
