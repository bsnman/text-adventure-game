import { describe, it, expect } from 'vitest'
import { calculateAttackSpeed } from '../combat'

describe('calculateAttackSpeed', () => {
  it('returns larger values with more agility', () => {
    const base = 1.5
    const low = calculateAttackSpeed(base, 0)
    const high = calculateAttackSpeed(base, 10)
    expect(high).toBeGreaterThan(low)
  })

  it('handles base values below e', () => {
    const speed = calculateAttackSpeed(0.5, 0)
    expect(speed).toBeLessThan(0)
  })
})
