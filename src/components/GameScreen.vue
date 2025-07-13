<script setup lang="ts">
import { useGameStore } from '../store/game'

const game = useGameStore()
</script>

<template>
  <div>
    <h1>Text Adventure Game</h1>
    <p>{{ game.room.description }}</p>
    <ul>
      <li v-for="direction in Object.keys(game.room.exits)" :key="direction">
        {{ direction }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
