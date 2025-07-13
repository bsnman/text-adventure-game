export interface Room {
  description: string
  exits: Record<string, string>
}

export type World = Record<string, Room>

export interface Coordinates {
  x: number
  y: number
}
