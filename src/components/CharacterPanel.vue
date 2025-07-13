<!--
Displays the player's attributes and derived combat statistics.
-->
<script setup lang="ts">
import { usePlayerStore } from '../store/player'

const player = usePlayerStore()
</script>

<template>
  <v-card>
    <v-card-title>Character</v-card-title>
    <v-card-text>
      <p><strong>Strength:</strong> {{ player.strength }}</p>
      <p><strong>Agility:</strong> {{ player.agility }}</p>
      <p><strong>Vitality:</strong> {{ player.vitality }}</p>
      <p><strong>Intelligence:</strong> {{ player.intelligence }}</p>
      <hr />
      <p><strong>Min Damage:</strong> {{ player.minDamage.toFixed(1) }}</p>
      <p><strong>Max Damage:</strong> {{ player.maxDamage.toFixed(1) }}</p>
      <p><strong>Attack Speed:</strong> {{ player.attackSpeed.toFixed(2) }} /s</p>
    </v-card-text>
  </v-card>
</template>
