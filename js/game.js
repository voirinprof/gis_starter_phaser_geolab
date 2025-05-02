export default class GameScene extends Phaser.Scene {

    constructor() {
      super('GameScene');
      this.score = 0;
    }
  
    preload() {
        this.load.image('spider', 'assets/images/orange-spider.png');
        this.load.image('fly', 'assets/images/fly.png');
    }
  
    create() {
        // add the spider
        this.spider = this.physics.add.sprite(200, 300, 'spider'); // adding the logo
        this.spider.scale = 0.25;
        
        // add the fly
        this.fly = this.physics.add.sprite(600, 400, 'fly'); // adding the logo
        this.fly.scale = 0.12;
        
        // add the score text
        this.mytext = this.add.text(10, 10, 'Score: '+this.score, { fontSize: '22px', fill: '#fff' })
        
        // add the cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // add the overlap between the spider and the fly
        this.physics.add.overlap(
            this.spider,
            this.fly,
            (spider, fly) => {
            fly.disableBody(true, true)
                this.score ++;
                this.mytext.setText("Score: " + this.score)
            },
            null,
            this
        )
    }
  
    update() {
        if(this.cursors.right.isDown) {
            this.spider.x += 1;
        }
        else if(this.cursors.left.isDown) {
            this.spider.x -= 1;
        } else if(this.cursors.up.isDown) {
            this.spider.y -= 1;
        } else if(this.cursors.down.isDown) {
            this.spider.y += 1;
        }
    }
  }
  