# Text Adventure Game

A small text-based adventure game built with **Vue 3**, **TypeScript** and [Vite](https://vitejs.dev/). The repository currently contains a basic game screen and can be used as a starting point for your own adventure.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173/` by default.

3. **Build for production**

   ```bash
   npm run build
   ```

   The compiled files will be generated in the `dist` directory.

## Project Structure

```
src/
  assets/          # static assets
  components/      # Vue components
  data/            # game data (currently empty)
  types/           # TypeScript types
```

Modify files in `src/data` and `src/components` to extend the game, create new scenes or add features.

### World Generation

`src/data/world.ts` exports a configuration object and uses it to generate the game map. Rooms listed in the configuration are connected automatically with a reusable walkway room. The order of rooms is randomized on each page load so the layout changes every time. Replacing or adjusting this configuration lets you create different levels without changing the game logic.

A small map below the room description shows the locations you have already visited. Each room is drawn as a square with openings for any available exits and your current location highlighted.

You can navigate using the on-screen arrow buttons or with your keyboard. Both the arrow keys and the classic `W`, `A`, `S`, `D` keys trigger movement between rooms.

## Inventory

Some rooms contain items you can collect. The right side panel now displays an **Inventory** section listing everything you've picked up. Use the `pickUp` and `useItem` actions from the game store to manage these items in your own components or game logic.

## Character Stats

The new **Character** panel shows your attributes and calculated combat values. Attributes influence derived stats as follows:

- **Strength** – increases minimum and maximum damage
- **Agility** – increases attack speed
- **Vitality** – increases health and regeneration (not yet implemented)
- **Intelligence** – increases mana and regeneration (not yet implemented)

Displayed combat stats include minimum damage, maximum damage and attacks per second. Base damage and attack speed values are stored internally and combined with the attributes.

## Features

This project aims to grow into a full text adventure experience. The following features are currently planned:

- Interactive exploration of rooms and locations.
- Inventory management for picking up and using items.
- Character interaction including conversations with NPCs.
- Detailed character stats such as health, strength, agility and experience.
- Quests and objectives that guide the story.
- Turn-based RPG battle system with player and enemy stats, critical hits and rewards.
- Save and load support.
- Map of visited rooms drawn on a canvas.

## License

MIT
