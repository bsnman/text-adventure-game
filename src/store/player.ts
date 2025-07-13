import { defineStore } from 'pinia'
import { calculateAttackSpeed } from '../utils/combat'

/**
 * Pinia store representing the player character.
 * Contains base stats and derived combat attributes.
 */
export const usePlayerStore = defineStore('player', {
  state: () => ({
    baseMinDamage: 2,
    baseMaxDamage: 4,
    baseAttackSpeed: 1.2,
    strength: 5,
    agility: 3,
    vitality: 4,
    intelligence: 2
  }),
  getters: {
    /** Minimum damage output including strength bonus */
    minDamage: (s) => s.baseMinDamage + s.strength,
    /** Maximum damage output including strength bonus */
    maxDamage: (s) => s.baseMaxDamage + s.strength * 1.5,
    /** Attacks per second after agility bonuses */
    attackSpeed: (s) => calculateAttackSpeed(s.baseAttackSpeed, s.agility)
  }
})
