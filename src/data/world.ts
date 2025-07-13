import type { World } from '../types/world'

export const world: World = {
  start: {
    description: "You are in a dimly lit room. There’s a door to the north.",
    exits: { north: "hallway" },
    items: [
      {
        id: 'torch',
        name: 'Torch',
        description: 'A handy torch to light your way.'
      }
    ]
  },
  hallway: {
    description: "You are in a long hallway. Doors lead east and west.",
    exits: { south: "start", east: "library", west: "kitchen" },
    items: [
      {
        id: 'coin',
        name: 'Gold Coin',
        description: 'A shiny gold coin lying on the floor.'
      }
    ]
  },
  library: {
    description: "You enter a dusty library filled with old books.",
    exits: { west: "hallway" },
    items: [
      {
        id: 'book',
        name: 'Ancient Book',
        description: 'An old tome with strange symbols.'
      }
    ]
  },
  kitchen: {
    description: "The kitchen smells of old food. There’s a knife here.",
    exits: { east: "hallway" },
    items: [
      {
        id: 'knife',
        name: 'Kitchen Knife',
        description: 'Looks sharp enough to be useful.'
      }
    ]
  },
};
