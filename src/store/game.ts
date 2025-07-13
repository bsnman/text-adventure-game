import { defineStore } from 'pinia'
import { world } from '../data/world'

export const useGameStore = defineStore('game', {
  state: () => ({
    currentRoom: 'start'
  }),
  getters: {
    room: (state) => world[state.currentRoom]
  },
  actions: {
    move(direction: string) {
      const next = world[this.currentRoom].exits[direction]
      if (next) {
        this.currentRoom = next
      }
    }
  }
})
