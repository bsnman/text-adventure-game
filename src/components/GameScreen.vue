<script setup lang="ts">
import { useGameStore } from '../store/game'

const game = useGameStore()
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>Text Adventure Game</v-card-title>
    <v-card-text>
      <p>{{ game.room.description }}</p>
      <v-list>
        <v-list-item
          v-for="direction in Object.keys(game.room.exits)"
          :key="direction"
        >
          <v-list-item-title>{{ direction }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
