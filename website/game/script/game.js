var game = new Phaser.Game(430, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
game.load.image('coin', '../image/coin.png');
}
    
function create() {
game.add.sprite(0, 0, 'coin');
}

function update() {
}