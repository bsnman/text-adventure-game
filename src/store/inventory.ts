import { defineStore } from 'pinia'
import type { Item } from '../types/world'

/**
 * Pinia store managing items collected by the player.
 */
export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    items: [] as Item[]
  }),
  actions: {
    /** Add an item to the inventory */
    add(item: Item) {
      this.items.push(item)
    },
    /** Remove an item by id */
    remove(id: string) {
      this.items = this.items.filter(i => i.id !== id)
    },
    /** Check if an item is currently held */
    has(id: string) {
      return this.items.some(i => i.id === id)
    }
  }
})
