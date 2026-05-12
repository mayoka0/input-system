# 🎮 Neon Surge | Input System

### 🤖 Meet the Agent: Cerebro
**Cerebro, the Input Agent**, is the vital bridge between meat-space and the digital Grid. Born from the telemetry of a thousand arcade cabinets, Cerebro interprets every twitch, click, and button press with superhuman speed. Without Cerebro, the Siphon Agent is just a ghost in the machine; with him, you are the master of the Surge.

### ⚡ My Specific Superpowers
*   **Multi-Device Mastery**: Seamlessly integrates Keyboard, Gamepad, and Mouse steering into a unified control stream.
*   **Axis Smoothing (Lerp)**: Converts raw binary key presses into fluid, interpolated movement vectors for that "weighted" flight feel.
*   **Combo Detection**: A sophisticated temporal buffer that recognizes specific key sequences (e.g., Double-Tap) to trigger hidden protocols.
*   **Mouse Precision**: High-sensitivity mouse delta tracking for surgical navigation through dense obstacle fields.

### 🛠️ Technical Spec
Cerebro's core logic is built around the **Temporal Input Buffer** and **Lerp-based Smoothing**.
- **Interpolation**: Uses a configurable `lerpFactor` (default 0.1) to smoothly transition axis values from `value` to `target`.
- **Combo Windows**: Implements a 500ms `comboTimeout` using a `keyHistory` stack to match registered `sequence` arrays.
- **Gamepad Integration**: Hooks into the `navigator.getGamepads()` API with built-in deadzone filtering (0.1 threshold) for analog sticks.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **Atlas** | Core Engine & Orchestration | `core-engine` |
| **Cerebro** | Input Processing & Mapping | `input-system` |
| **Aura** | Procedural Audio & Soundscapes | `audio-system` |
| **Vortex** | Physics & Collision Detection | `physics-system` |
| **Iris** | User Interface & Neon HUD | `ui-system` |
| **Nova** | Player Entity & Controller | `player-entity` |
| **Obsidian** | Obstacle Intelligence | `obstacle-entity` |
| **Nexus** | Game Rules & State Logic | `game-logic` |
| **Chronos** | Lore & Documentation | `design-docs` |
| **Forge** | Build & Deployment | `build-config` |

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Cerebro into the `repos/` directory.
3. Integrated via the **Nexus (game-logic)** agent.
4. For standalone diagnostics:
   ```bash
   npm install
   npm run dev
   ```
