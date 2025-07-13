<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '../store/game'

const game = useGameStore()
const command = ref('')

function handleCommand() {
  const input = command.value.trim().toLowerCase()
  const match = input.match(/^(?:go\s+)?(\w+)/)
  if (match) {
    game.move(match[1])
  }
  command.value = ''
}
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
      <v-text-field
        v-model="command"
        label="Command"
        placeholder="e.g., go north"
        hide-details
        @keyup.enter="handleCommand"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
