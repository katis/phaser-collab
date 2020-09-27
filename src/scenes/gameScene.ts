export class GameScene extends Phaser.Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;
  obstacle: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;

  constructor() {
    super({ active: false, visible: false });
    Phaser.Scene.call(this, { key: "GameScene" });
    console.log("game", this.game);
  }

  preload() {
    console.log("Game preload");
    this.load.image("box", "assets/images/box.png");
    this.load.image("box2", "assets/images/box2.png");
  }

  create() {
    console.log("Game create");
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = this.physics.add
      .sprite(100, 100, "box")
      .setCollideWorldBounds(true);
    this.obstacle = this.physics.add
      .sprite(200, 200, "box2")
      .setCollideWorldBounds(true);
  }

  update() {
    this.player?.setVelocity(0, 0);
    this.obstacle?.setVelocity(0, 0);

    if (this.cursors!.left!.isDown) {
      this.player!.setVelocityX(-100);
    } else if (this.cursors!.right!.isDown) {
      this.player!.setVelocityX(100);
    }

    if (this.cursors!.up!.isDown) {
      this.player!.setVelocityY(-100);
    } else if (this.cursors!.down!.isDown) {
      this.player!.setVelocityY(100);
    }

    this.physics.world.collide(this.player!, this.obstacle);
  }
}
