import { GameScene } from "./scenes/gameScene";
import { MenuScene } from "./scenes/menuScene";

export function startGame() {
  const config: Phaser.Types.Core.GameConfig = {
    title: "Phaser game",
    scale: {
      width: 800,
      height: 600,
    },
    physics: {
      default: "arcade",
      arcade: {
        debug: true,
      },
    },
    parent: "game",
    backgroundColor: "#0f0f0f",
    scene: [MenuScene],
  };

  return new Phaser.Game(config);
}
