import { describe, it, expect } from 'vitest'
import { generateWorld, WorldConfig } from '../world'

const baseConfig: WorldConfig = {
  rooms: {
    start: { description: 'start', exits: {} },
    a: { description: 'a', exits: {} },
    b: { description: 'b', exits: {} }
  },
  walkway: { description: 'walk', exits: {} }
}

describe('generateWorld', () => {
  it('creates a linear world using each room once in random order', () => {
    const rng = () => 0.2
    const world = generateWorld(baseConfig, rng)
    expect(Object.keys(world)).toEqual([
      'start',
      'walkway1',
      'b',
      'walkway2',
      'a'
    ])
    expect(world.start.exits.north).toBe('walkway1')
    expect(world.walkway1.exits.north).toBe('b')
    expect(world.b.exits.south).toBe('walkway1')
  })

  it('produces different layouts when rng changes', () => {
    const low = generateWorld(baseConfig, () => 0.2)
    const high = generateWorld(baseConfig, () => 0.8)
    expect(low.walkway1.exits.north).not.toBe(high.walkway1.exits.north)
  })

  it('throws when start room is missing', () => {
    const bad: WorldConfig = { rooms: { a: { description: 'a', exits: {} } }, walkway: { description: 'w', exits: {} } }
    expect(() => generateWorld(bad)).toThrow()
  })
})
