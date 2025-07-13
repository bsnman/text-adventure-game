## 🤖 Agent: Codex

### 📌 Primary Role

Generate clean, testable frontend code for a browser-based text adventure game. Components and logic must be modular and well-documented.

---

## 🧩 Project Context

- Framework: Vue 3 (Vite, `<script setup>`)
- Testing: Vitest + Vue Test Utils
- No backend, only frontend state
- Uses global state via `ref()` or `reactive()`

---

## 📐 Code Structure Expectations

| Type              | Location                         | Test File Location                             |
| ----------------- | -------------------------------- | ---------------------------------------------- |
| Vue Component     | `src/components/MyComponent.vue` | `src/components/__tests__/MyComponent.spec.ts` |
| Game Logic Module | `src/game/world.js`              | `src/game/__tests__/world.spec.ts`             |
| Utilities         | `src/utils/helpers.js`           | `src/utils/__tests__/helpers.spec.ts`          |

---

## ✅ Responsibilities

### 1. Component and Logic Creation

- Components must follow Composition API and `<script setup>`
- Game logic should be stored in `/src/game/` modules
- Avoid bloated components — extract logic into reusable modules

### 2. Mandatory Testing

For **every function, Vue component, or composable generated**, the following must be true:

- A corresponding test file must be created
- Use **Vitest** and **Vue Test Utils**
- Include:
  - ✅ Normal usage
  - ❌ Invalid/edge cases
  - 🧪 Snapshot or DOM checks for components

### 3. Documentation

- JS/TS modules must include JSDoc comments
- Components should have a comment block outlining purpose and expected props/state
- New functionality must be documented in `README.md` if it affects gameplay or usage

---

## ✍️ Example Prompt (for Codex)

> Generate a Vue component `RoomDescription.vue` that displays the current room’s name and description. Also create a test in `__tests__/RoomDescription.spec.ts` that checks rendering with props and edge cases (missing description).

---

## 🧠 Agent Behavior Summary

| Rule                                        | Required |
| ------------------------------------------- | -------- |
| Generate tests with each function/component | ✅ Yes   |
| Follow Composition API                      | ✅ Yes   |
| Separate logic from UI                      | ✅ Yes   |
| Assume browser-only runtime                 | ✅ Yes   |
