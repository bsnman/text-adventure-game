<script setup lang="ts">
import { useGameStore } from '../store/game'

const game = useGameStore()
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>Text Adventure Game</v-card-title>
    <v-card-text>
      <p>{{ game.room.description }}</p>
      <div class="my-2">
        <v-btn
          v-for="direction in Object.keys(game.room.exits)"
          :key="direction"
          class="ma-1"
          @click="game.move(direction)"
        >
          Go {{ direction }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
