import { defineStore } from 'pinia'
import {
  calculateMinDamage,
  calculateMaxDamage,
  calculateAttackSpeed,
  BaseStats,
  Attributes
} from '../game/character'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    baseMinDamage: 2,
    baseMaxDamage: 4,
    baseAttackSpeed: 1.5,
    strength: 1,
    agility: 1,
    vitality: 1,
    intelligence: 1
  }),
  getters: {
    minDamage(state) {
      return calculateMinDamage(state as BaseStats, state as Attributes)
    },
    maxDamage(state) {
      return calculateMaxDamage(state as BaseStats, state as Attributes)
    },
    attackSpeed(state) {
      return calculateAttackSpeed(state as BaseStats, state as Attributes)
    }
  }
})
