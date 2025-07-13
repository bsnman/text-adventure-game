import { describe, it, expect } from 'vitest'
import { calculateMinDamage, calculateMaxDamage, calculateAttackSpeed } from '../character'

const stats = { baseMinDamage: 2, baseMaxDamage: 4, baseAttackSpeed: 1.5 }
const attrs = { strength: 3, agility: 2, vitality: 1, intelligence: 1 }

describe('character calculations', () => {
  it('calculates min and max damage correctly', () => {
    expect(calculateMinDamage(stats, attrs)).toBe(5)
    expect(calculateMaxDamage(stats, attrs)).toBeCloseTo(8.5)
  })

  it('calculates attack speed with agility', () => {
    const speed = calculateAttackSpeed(stats, attrs)
    expect(speed).toBeCloseTo(Math.log(1.5) + 0.2)
  })
})
