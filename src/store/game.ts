import { defineStore } from 'pinia'
import { world } from '../data/world'
import type { Coordinates, Item } from '../types/world'
import { useInventoryStore } from './inventory'

export const useGameStore = defineStore('game', {
  state: () => ({
    currentRoom: 'start',
    visited: { start: { x: 0, y: 0 } } as Record<string, Coordinates>
  }),
  getters: {
    room: (state) => world[state.currentRoom]
  },
  actions: {
    move(direction: string) {
      const next = world[this.currentRoom].exits[direction]
      if (next) {
        const offset: Record<string, [number, number]> = {
          north: [0, -1],
          south: [0, 1],
          east: [1, 0],
          west: [-1, 0]
        }
        const [dx, dy] = offset[direction] || [0, 0]
        const current = this.visited[this.currentRoom] || { x: 0, y: 0 }
        const coords = { x: current.x + dx, y: current.y + dy }
        if (!this.visited[next]) {
          this.visited[next] = coords
        }
        this.currentRoom = next
      }
    },
    /** Pick up an item from the current room and add it to the inventory */
    pickUp(id: string) {
      const room = world[this.currentRoom]
      if (!room.items) return
      const index = room.items.findIndex(i => i.id === id)
      if (index !== -1) {
        const [item] = room.items.splice(index, 1)
        useInventoryStore().add(item)
      }
    },
    /** Use an item from the inventory */
    useItem(id: string) {
      const inventory = useInventoryStore()
      if (inventory.has(id)) {
        inventory.remove(id)
      }
    }
  }
})
