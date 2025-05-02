export default class GameScene extends Phaser.Scene {
    constructor() {
      super('GameScene');
    }
  
    preload() {
      this.load.image('player', 'assets/images/player.png');
      this.load.audio('jump', 'assets/audio/jump.wav');
    }
  
    create() {
      this.player = this.physics.add.sprite(100, 450, 'player');
      this.input.keyboard.on('keydown-SPACE', () => {
        this.player.setVelocityY(-300);
        this.sound.play('jump');
      });
    }
  
    update() {
      // update game logic here
    }
  }
  