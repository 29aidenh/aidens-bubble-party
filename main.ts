controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(130, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(100, 100)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let down: Sprite = null
let IMRight: Sprite = null
let UP: Sprite = null
let speed = 0
let lefty: Sprite = null
let Alane1 = 0
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101020202020202020202020202020202020202020203030303030303030303030303030303030303030404040404040404040404040404040404040404`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
effects.bubbles.startScreenEffect()
mySprite = sprites.create(img`
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 
    5 5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 8 9 9 9 5 5 9 9 9 5 5 5 5 5 
    5 5 8 9 9 9 5 5 9 9 9 5 5 5 5 5 
    5 5 8 9 f 9 9 9 9 f 9 5 5 5 5 5 
    5 5 8 9 9 9 9 9 9 9 9 5 5 5 5 5 
    5 5 8 9 9 9 5 5 9 9 9 5 5 5 5 5 
    5 5 8 8 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 8 5 5 9 9 9 9 9 9 5 5 5 5 5 
    5 5 8 8 8 9 9 9 9 9 9 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 100)
let Aiden_Hspeed = 40
info.setScore(0)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    Alane1 = randint(1, 4)
    if (Alane1 == 1) {
        lefty = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 f f 9 9 9 9 9 9 9 9 . 
            . 9 9 9 f f f f f f f f 9 9 9 . 
            . 9 9 f f f f f f f f f 9 9 9 . 
            . 9 9 9 f f f f f f f f 9 9 9 . 
            . 9 9 9 9 f f 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        lefty.setVelocity(0, speed)
        lefty.setPosition(30, 8)
    } else if (Alane1 == 2) {
        UP = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 f 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 f f f f f 9 9 9 9 9 . 
            . 9 9 9 f f f f f f f 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        UP.setVelocity(0, speed)
        UP.setPosition(60, 8)
    } else if (Alane1 == 4) {
        IMRight = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 f 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 f f 9 9 9 9 9 9 . 
            . 9 9 f f f f f f f 9 9 9 9 9 . 
            . 9 9 f f f f f f f f 9 9 9 9 . 
            . 9 9 f f f f f f f 9 9 9 9 9 . 
            . 9 9 9 9 9 9 f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 f 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        IMRight.setVelocity(0, speed)
        IMRight.setPosition(130, 8)
    } else if (Alane1 == 3) {
        down = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 f f f f f f f 9 9 9 9 . 
            . 9 9 9 9 f f f f f 9 9 9 9 9 . 
            . 9 9 9 9 9 f f f 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 f 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    }
})
game.onUpdateInterval(2000, function () {
    speed += 1
})
game.onUpdateInterval(randint(7500, 10000), function () {
    projectile = sprites.createProjectileFromSprite(img`
        ........999999999999ccfff...............
        .......999ffffffffff9999f...............
        .......99fbbbbbbbbbfff9f9...............
        .......99fbb111bffbbbbff999.............
        ........9fb11111ffbbbbbcff9.............
        ........9f1cccc11bbcbcbcccf99.9999......
        .......999fc1c1c1bbbcbcbcccf999ccccc....
        .......99999c3331bbbcbcbccccfccddbbc....
        ...199..999c333c1bbbbbbbcccccbddbcc.....
        ..11999.999c331c11bbbbbcccccccbbcc......
        ..99999.99cc13c111bbbbccccccffbccf......
        ..99999..9c111111cbbbcccccbb99fccf......
        ...999...999c1111cbbbfdddddc99fbbcf.....
        ...........99cccffbdbbfdddc9999fbbf.....
        ........1999999999fbdbbfcc999999fbbf....
        .......11999.999999fffff999999999fff....
        .......99999.......999999999999999......
        .......99999............................
        ........999.............................
        ........................................
        `, mySprite, 50, 50)
})
