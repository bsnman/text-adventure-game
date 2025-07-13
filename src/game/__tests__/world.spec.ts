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
  it('creates a linear world using each room once', () => {
    const world = generateWorld(baseConfig)
    expect(Object.keys(world)).toEqual([
      'start',
      'walkway1',
      'a',
      'walkway2',
      'b'
    ])
    expect(world.start.exits.north).toBe('walkway1')
    expect(world.walkway1.exits.north).toBe('a')
    expect(world.a.exits.south).toBe('walkway1')
  })

  it('throws when start room is missing', () => {
    const bad: WorldConfig = { rooms: { a: { description: 'a', exits: {} } }, walkway: { description: 'w', exits: {} } }
    expect(() => generateWorld(bad)).toThrow()
  })
})
