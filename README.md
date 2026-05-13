<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=7aa2f7&center=true&vCenter=true&width=600&lines=Cerebro:+Monitoring+Neural+Interfaces...;Interpreting+Control+Streams...;Input+Link+Stable." alt="Typing SVG" />
</div>

# 🎮 Neon Surge | Input System

### 📊 Agent Telemetry
<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=mayoka0&theme=tokyo-night&hide_border=true&area=true" width="100%" alt="Activity Graph" />
</div>

### 🤖 Meet the Agent: Cerebro
**Cerebro, the Input Agent**, is the vital bridge between meat-space and the digital Grid. Born from the telemetry of a thousand arcade cabinets, Cerebro interprets every twitch, click, and button press with superhuman speed. Without Cerebro, the Siphon Agent is just a ghost in the machine; with him, you are the master of the Surge.

### ⚡ My Specific Superpowers
*   **Multi-Device Mastery**: Seamlessly integrates Keyboard, Gamepad, and Mouse steering into a unified control stream.
*   **Axis Smoothing (Lerp)**: Converts raw binary key presses into fluid, interpolated movement vectors for that "weighted" flight feel.
*   **Combo Detection**: A sophisticated temporal buffer that recognizes specific key sequences (e.g., Double-Tap) to trigger hidden protocols.
*   **Mouse Precision**: High-sensitivity mouse delta tracking for surgical navigation through dense obstacle fields.

### 🛠️ Technical Spec
Cerebro's core logic is built around a high-performance **Temporal Input Buffer** designed to eliminate input latency and ghosting. By capturing raw hardware events and timestamping them within a millisecond-accurate queue, the system can reconstruct the user's intent with absolute precision. This buffer allows for complex operations like sub-frame input resolution, ensuring that high-speed maneuvers are registered exactly when they occur, regardless of the current rendering frame rate.

The system also implements a sophisticated **Lerp-based Smoothing** engine for multi-axis movement. Instead of passing raw binary values (0 or 1) to the simulation, Cerebro applies a linear interpolation factor (default 0.1) to create "weighted" movement. This mimics the inertia of physical controls, providing a professional flight-simulator feel. Additionally, the gamepad integration layer features a radial deadzone filtering algorithm (0.1 threshold) that prevents stick drift while maintaining 100% sensitivity at the edges of the analog range.

---

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=mayoka0&repo=input-system&theme=tokyonight&hide_border=true&title_color=7aa2f7&icon_color=7aa2f7&text_color=ffffff" alt="Repo Card" />
</div>

🔗 **Part of the [Neon Surge Ecosystem](https://github.com/mayoka0/mayoka0#-neon-surge-architecture)**

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Cerebro into the `repos/` directory.
3. Integrated via the **Nexus (game-logic)** agent.
4. For standalone diagnostics:
   ```bash
   npm install
   npm run dev
   ```
