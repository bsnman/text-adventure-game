<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { world } from '../data/world'

interface Visited {
  [room: string]: { x: number; y: number }
}

const props = defineProps<{
  visited: Visited
  current: string
}>()

const canvas = ref<HTMLCanvasElement | null>(null)

const cellSize = 40

function draw() {
  const cvs = canvas.value
  if (!cvs) return
  const ctx = cvs.getContext('2d')
  if (!ctx) return

  const coords = Object.values(props.visited)
  if (!coords.length) return

  const xs = coords.map(c => c.x)
  const ys = coords.map(c => c.y)
  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)
  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)

  const width = (maxX - minX + 1) * cellSize
  const height = (maxY - minY + 1) * cellSize
  cvs.width = width
  cvs.height = height

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 2

  for (const [room, coord] of Object.entries(props.visited)) {
    const exits = world[room].exits
    const x = (coord.x - minX) * cellSize
    const y = (coord.y - minY) * cellSize
    ctx.beginPath()
    if (!exits.north) {
      ctx.moveTo(x, y)
      ctx.lineTo(x + cellSize, y)
    }
    if (!exits.south) {
      ctx.moveTo(x, y + cellSize)
      ctx.lineTo(x + cellSize, y + cellSize)
    }
    if (!exits.west) {
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + cellSize)
    }
    if (!exits.east) {
      ctx.moveTo(x + cellSize, y)
      ctx.lineTo(x + cellSize, y + cellSize)
    }
    ctx.stroke()

    if (props.current === room) {
      ctx.fillStyle = 'rgba(100,200,100,0.3)'
      ctx.fillRect(x + 3, y + 3, cellSize - 6, cellSize - 6)
    }
  }
}

watchEffect(draw)
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid #ccc;
}
</style>
