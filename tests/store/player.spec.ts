import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePlayerStore } from '../../src/store/player'

describe('usePlayerStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('computes derived stats correctly', () => {
    const player = usePlayerStore()
    player.strength = 2
    player.agility = 1
    expect(player.minDamage).toBe(player.baseMinDamage + player.strength)
    expect(player.maxDamage).toBe(player.baseMaxDamage + player.strength * 1.5)
    expect(player.attackSpeed).toBeGreaterThan(0)
  })
})
