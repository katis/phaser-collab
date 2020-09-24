export function startGame() {
  const config = {
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
    scene: new GameScene(),
  };

  return new Phaser.Game(config);
}

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ active: false, visible: false });
    console.log("game", this.game);
  }

  update() {
    this.cameras.main.setBackgroundColor("#000000");
  }
}
