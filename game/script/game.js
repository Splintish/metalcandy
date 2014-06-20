var game = new Phaser.Game(430, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('coin', 'game/image/coin.png');
}
    
function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = 500;
    game.input.onDown.add(addRemove, this);
}

function addRemove(pointer){
    var coin = game.add.sprite(pointer.position.x, pointer.position.y, "coin");
    game.physics.p2.enable(coin);
    coin.body.setCircle(7)
    }

function update() {
}