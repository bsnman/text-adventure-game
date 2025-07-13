export interface BaseStats {
  baseMinDamage: number
  baseMaxDamage: number
  baseAttackSpeed: number
}

export interface Attributes {
  strength: number
  agility: number
  vitality: number
  intelligence: number
}

/**
 * Calculate the player's minimum damage.
 * @param stats - base damage numbers
 * @param attrs - attribute values
 */
export function calculateMinDamage(stats: BaseStats, attrs: Attributes): number {
  return stats.baseMinDamage + attrs.strength
}

/**
 * Calculate the player's maximum damage.
 * @param stats - base damage numbers
 * @param attrs - attribute values
 */
export function calculateMaxDamage(stats: BaseStats, attrs: Attributes): number {
  return stats.baseMaxDamage + attrs.strength * 1.5
}

/**
 * Calculate attacks per second based on base attack speed and agility.
 * Uses a logarithmic scaling for diminishing returns.
 *
 * @param stats - base attack speed value
 * @param attrs - attribute values
 * @returns number of attacks per second
 */
export function calculateAttackSpeed(stats: BaseStats, attrs: Attributes): number {
  return Math.log(stats.baseAttackSpeed) + attrs.agility * 0.1
}
