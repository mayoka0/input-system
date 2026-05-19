# Cerebro | Input System Agent Instructions

## Overview
Cerebro is a unified input management system for Neon Surge, handling keyboard, gamepad, and mouse inputs with smoothed axis values and combo detection.

## Core Components
- `InputHandler.js`: The central class for tracking key states, mouse deltas, and gamepad axes.
- `LERP Smoothing`: Interpolates raw input into fluid values (0.1 default factor).
- `Combo Detection`: Monitors temporal key sequences (e.g., 'w', 'w' for dash).
- `Mouse Steering`: Translates horizontal mouse movement into axis-steering.

## Coding Standards
- **Input Neutrality**: Systems should rely on `getAxis('Horizontal')` and `getAxis('Vertical')` rather than checking specific keys.
- **Smoothing**: Ensure the `update()` method is called once per frame in the main game loop to advance interpolation.
- **Temporal Buffer**: Use the `comboTimeout` (500ms default) to define the window for multi-key sequences.

## Axis Snapping
- Axes automatically snap to their target if the difference is less than `0.001` to prevent infinite tiny floating-point updates.

## Future Improvements
- [ ] Add support for touch input (mobile).
- [ ] Implement rebindable key mappings.
- [ ] Add more complex combo patterns (e.g., directional sequences like 'w', 'a', 's', 'd').
- [ ] Add unit tests for `_interpolateAxes` and `_checkCombos`.
