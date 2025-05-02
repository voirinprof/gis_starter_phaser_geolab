import Phaser from "phaser";
import GameScene from "./game.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: GameScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true
    }
  }
};

new Phaser.Game(config);
