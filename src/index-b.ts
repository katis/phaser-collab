export function startGame() {
  const config: Phaser.Types.Core.GameConfig = {
    title: "Phaser game",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
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
    scene: new SceneB(),
  };

  return new Phaser.Game(config);
}

export class SceneB extends Phaser.Scene {
  constructor() {
    super({ active: false, visible: false });
  }
}
