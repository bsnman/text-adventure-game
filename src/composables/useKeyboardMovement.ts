import { onMounted, onUnmounted } from 'vue'

export type Direction = 'north' | 'south' | 'east' | 'west'

/**
 * Sets up global keyboard listeners for WASD and arrow keys.
 * When a matching key is pressed, the provided move callback
 * is called with the corresponding direction.
 *
 * @param move - function that performs movement in a given direction
 */
export function useKeyboardMovement(move: (direction: Direction) => void) {
  const keyMap: Record<string, Direction> = {
    ArrowUp: 'north',
    w: 'north',
    ArrowDown: 'south',
    s: 'south',
    ArrowLeft: 'west',
    a: 'west',
    ArrowRight: 'east',
    d: 'east'
  }

  const handler = (e: KeyboardEvent) => {
    const dir = keyMap[e.key]
    if (dir) {
      e.preventDefault()
      move(dir)
    }
  }

  onMounted(() => window.addEventListener('keydown', handler))
  onUnmounted(() => window.removeEventListener('keydown', handler))
}
