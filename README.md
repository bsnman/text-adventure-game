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

A small map below the room description shows the locations you have already visited. Each room is drawn as a square with openings for any available exits and your current location highlighted.

You can navigate using the on-screen arrow buttons or with your keyboard. Both the arrow keys and the classic `W`, `A`, `S`, `D` keys trigger movement between rooms.

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
