import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePlayerStore } from '../../src/store/player'

describe('usePlayerStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('computes derived stats', () => {
    const player = usePlayerStore()
    expect(player.minDamage).toBe(3)
    expect(player.maxDamage).toBeCloseTo(5.5)
    expect(player.attackSpeed).toBeCloseTo(Math.log(1.5) + 0.1)
  })
})
