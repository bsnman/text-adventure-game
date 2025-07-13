import type { World } from '../types/world'

export const world: World = {
  start: {
    description: "You are in a dimly lit room. There’s a door to the north.",
    exits: { north: "hallway" },
  },
  hallway: {
    description: "You are in a long hallway. Doors lead east and west.",
    exits: { south: "start", east: "library", west: "kitchen" },
  },
  library: {
    description: "You enter a dusty library filled with old books.",
    exits: { west: "hallway" },
  },
  kitchen: {
    description: "The kitchen smells of old food. There’s a knife here.",
    exits: { east: "hallway" },
  },
};
