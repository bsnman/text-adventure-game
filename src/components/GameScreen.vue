<script setup lang="ts">
import { useGameStore } from '../store/game'
import MapCanvas from './MapCanvas.vue'
import { useKeyboardMovement } from '../composables/useKeyboardMovement'

const game = useGameStore()
useKeyboardMovement(game.move)
</script>

<template>
  <v-row no-gutters>
    <v-col class="pr-0">
      <v-card class="w-100">
        <v-card-title>Text Adventure Game</v-card-title>
        <v-card-text>
          <p>{{ game.room.description }}</p>
          <MapCanvas :visited="game.visited" :current="game.currentRoom" class="mb-4" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="3" class="side-panel d-flex flex-column">
      <div class="flex-grow-1"></div>
      <div class="d-flex flex-column align-center mb-4">
        <v-btn
          icon
          class="direction-btn mb-1"
          aria-label="Go north"
          :disabled="!game.room.exits.north"
          @click="game.move('north')"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
        <div>
          <v-btn
            icon
            class="direction-btn mr-1"
            aria-label="Go west"
            :disabled="!game.room.exits.west"
            @click="game.move('west')"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn
            icon
            class="direction-btn ml-1"
            aria-label="Go east"
            :disabled="!game.room.exits.east"
            @click="game.move('east')"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <v-btn
          icon
          class="direction-btn mt-1"
          aria-label="Go south"
          :disabled="!game.room.exits.south"
          @click="game.move('south')"
        >
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.side-panel {
  min-width: 100px;
}
.direction-btn {
  width: 40px;
  height: 40px;
}
</style>
