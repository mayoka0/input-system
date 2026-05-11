/**
 * InputHandler system for tracking keyboard input.
 */
export class InputHandler {
  constructor() {
    this.pressedKeys = new Set();

    window.addEventListener('keydown', (event) => {
      this.pressedKeys.add(event.key);
    });

    window.addEventListener('keyup', (event) => {
      this.pressedKeys.delete(event.key);
    });
  }

  /**
   * Checks if a specific key is currently pressed.
   * @param {string} key - The key to check (e.g., 'w', 'ArrowUp').
   * @returns {boolean} - True if the key is pressed, false otherwise.
   */
  isPressed(key) {
    return this.pressedKeys.has(key);
  }
}
