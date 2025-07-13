import type { Room, World } from '../types/world'

/** Configuration object used to generate a world layout. */
export interface WorldConfig {
  /** Rooms that should appear exactly once in the world. Must include a `start` room. */
  rooms: Record<string, Omit<Room, 'exits'> & Partial<Pick<Room, 'exits'>>>
  /** Template for the walkway room which will be duplicated to connect rooms. */
  walkway: Omit<Room, 'exits'> & Partial<Pick<Room, 'exits'>>
}

/**
 * Generate a world record from a configuration. Each defined room is used
 * once while the walkway template is duplicated to connect them in a linear
 * north–south fashion.
 *
 * @param config - world generation configuration
 * @returns generated world object
 */
export function generateWorld(config: WorldConfig): World {
  if (!config.rooms.start) {
    throw new Error('Start room is required')
  }

  const world: World = {}
  world.start = { ...config.rooms.start, exits: {} }

  const others = Object.keys(config.rooms).filter(n => n !== 'start')
  let previous = 'start'
  others.forEach((name, idx) => {
    const walkwayName = `walkway${idx + 1}`
    world[walkwayName] = { ...config.walkway, exits: {} }
    world[name] = { ...config.rooms[name], exits: {} }

    world[previous].exits.north = walkwayName
    world[walkwayName].exits.south = previous

    world[walkwayName].exits.north = name
    world[name].exits.south = walkwayName

    previous = name
  })

  return world
}
