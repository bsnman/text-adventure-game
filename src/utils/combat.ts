/**
 * Utility functions for combat calculations.
 */

/**
 * Calculate attacks per second using a logarithmic base value and agility
 * modifier.
 *
 * @param baseAttackSpeed - the character's base attack speed
 * @param agility - agility attribute value
 * @returns calculated attacks per second
 */
export function calculateAttackSpeed(baseAttackSpeed: number, agility: number): number {
  const agilityBonus = agility * 0.1
  return Math.log(baseAttackSpeed) + agilityBonus
}
