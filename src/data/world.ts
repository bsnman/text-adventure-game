import type { World } from '../types/world'
import type { WorldConfig } from '../game/world'
import { generateWorld } from '../game/world'

/** Default configuration used to build the initial game world. */
export const defaultWorldConfig: WorldConfig = {
  rooms: {
    start: {
      description: "You are in a dimly lit room. There’s a door to the north.",
      exits: {},
      items: [
        { id: 'torch', name: 'Torch', description: 'A handy torch to light your way.' }
      ]
    },
    kitchen: {
      description: 'The kitchen smells of old food. There’s a knife here.',
      exits: {},
      items: [
        { id: 'knife', name: 'Kitchen Knife', description: 'Looks sharp enough to be useful.' }
      ]
    },
    living: {
      description: 'You enter a cozy living room.',
      exits: {},
      items: [
        { id: 'coin', name: 'Gold Coin', description: 'A shiny gold coin lying on the floor.' }
      ]
    },
    bedroom: {
      description: 'A messy bedroom with a comfy bed.',
      exits: {},
      items: [
        { id: 'book', name: 'Ancient Book', description: 'An old tome with strange symbols.' }
      ]
    },
    toilet: {
      description: 'A small toilet with a flickering light.',
      exits: {}
    }
  },
  walkway: {
    description: 'You are in a long hallway connecting rooms.',
    exits: {}
  }
}

/** Generated world used by the game stores and components. */
export const world: World = generateWorld(defaultWorldConfig)
