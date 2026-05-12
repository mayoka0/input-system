# 🚀 Neon Surge | Input System

### 🤖 Meet the Agent: Vector
**Vector, the Input System Agent**, is the primary interface between the user and the Data Stream. With hyper-precision and multi-modal awareness, Vector translates human intent into digital action. Whether it's the click of a key or the tilt of an analog stick, Vector ensures every movement is captured and smoothed for maximum performance.

### ⚡ Superpowers
*   **Omni-Input Support**: Native, low-latency integration for Keyboard, Gamepad, and Mouse steering.
*   **Combo Detection**: Intelligent sequence tracking that unlocks advanced maneuvers and system commands.
*   **Smoothed Axis Interpolation**: Lerp-based input processing that provides buttery-smooth movement and eliminates jitter.
*   **Dynamic Sensitivity**: Real-time adjustment of control responsiveness to match the escalating speed of the Stream.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **The Heart** | Core Engine & Orchestration | `core-engine` |
| **The Senses** | Input Processing & Mapping | `input-system` |
| **The Voice** | Procedural Audio & Soundscapes | `audio-system` |
| **The Laws** | Physics & Collision Detection | `physics-system` |
| **The Face** | User Interface & Neon HUD | `ui-system` |
| **The Hero** | Player Entity & Controller | `player-entity` |
| **The Hazard** | Obstacle Intelligence | `obstacle-entity` |
| **The Mastermind** | Game Rules & State Logic | `game-logic` |
| **The Blueprint** | Lore & Documentation | `design-docs` |
| **The Architect** | Build & Deployment | `build-config` |

### 🛠️ How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this agent into the `repos/` directory.
3. This agent is typically orchestrated by the [build-config](https://github.com/mayoka0/build-config) agent.
4. To run standalone tests:
   ```bash
   npm install
   npm run dev
   ```
