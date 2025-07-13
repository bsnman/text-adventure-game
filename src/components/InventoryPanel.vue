<!--
Displays the player's current inventory items.
-->
<script setup lang="ts">
import { useInventoryStore } from '../store/inventory'
const inventory = useInventoryStore()
</script>

<template>
  <v-card>
    <v-card-title>Inventory</v-card-title>
    <v-card-text>
      <ul v-if="inventory.items.length">
        <li v-for="item in inventory.items" :key="item.id">{{ item.name }}</li>
      </ul>
      <span v-else>No items</span>
    </v-card-text>
  </v-card>
</template>
