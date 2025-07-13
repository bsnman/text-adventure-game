export interface Item {
  /** Unique identifier for the item */
  id: string
  /** Display name */
  name: string
  /** Short description shown to the player */
  description: string
}

export interface Room {
  description: string
  exits: Record<string, string>
  /** Optional items that can be collected in this room */
  items?: Item[]
}

export type World = Record<string, Room>

export interface Coordinates {
  x: number
  y: number
}
