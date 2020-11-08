controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(130, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(100, 100)
})
let URGOINGDOWN: Sprite = null
let IMRight: Sprite = null
let UP: Sprite = null
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
game.onUpdate(function () {
    Aiden_Hspeed += 1
})
game.onUpdateInterval(500, function () {
    let speed = 0
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
            `, SpriteKind.Player)
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
            `, SpriteKind.Player)
        IMRight.setVelocity(0, speed)
        IMRight.setPosition(130, 8)
    } else if (Alane1 == 3) {
        URGOINGDOWN = sprites.create(img`
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
            `, SpriteKind.Player)
        URGOINGDOWN.setVelocity(0, speed)
        URGOINGDOWN.setPosition(100, 8)
    }
})
