<script setup lang="ts">
import { useGameStore } from '../store/game'

const game = useGameStore()
</script>

<template>
  <div>
    <h1>Text Adventure Game</h1>
    <p>{{ game.room.description }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
