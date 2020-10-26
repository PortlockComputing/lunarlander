controller.down.onEvent(ControllerButtonEvent.Released, function () {
    rocket.ay = gravity
    rocket.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 f 1 . . . . . . . 
        . . . . . 1 f d 1 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f d 1 . . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . 1 d d f f d d d 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f . . . . . f 1 . . . . 
        . . . 1 f . . . . . f 1 . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rocket.ax = thrust
    rocket.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 f 1 . . . . . . . 
        . . . . . 1 f d 1 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f d 1 . . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . 1 d d f f d d d 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 2 f 2 f f d d f 1 . . . . 
        . . . 5 f 4 . . . . f 1 . . . . 
        . . 5 4 4 . . . . . f 1 . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    rocket.ax = idle
    rocket.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 f 1 . . . . . . . 
        . . . . . 1 f d 1 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f d 1 . . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . 1 d d f f d d d 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f . . . . . f 1 . . . . 
        . . . 1 f . . . . . f 1 . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    rocket.ax = idle
    rocket.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 f 1 . . . . . . . 
        . . . . . 1 f d 1 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f d 1 . . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . 1 d d f f d d d 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f . . . . . f 1 . . . . 
        . . . 1 f . . . . . f 1 . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rocket.ax = 0 - thrust
    rocket.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 f 1 . . . . . . . 
        . . . . . 1 f d 1 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f d 1 . . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . 1 d d f f d d d 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d 2 f 2 . . . . 
        . . . 1 f . . . . 4 f 5 . . . . 
        . . . 1 f . . . . . 4 4 5 . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    rocket.ay = gravity - thrust
    rocket.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 f 1 . . . . . . . 
        . . . . . 1 f d 1 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f d d 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f d 1 . . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . . 1 1 f f d 1 1 . . . . . 
        . . . 1 d d f f d d d 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f d f f d d f 1 . . . . 
        . . . 1 f 2 4 2 4 2 f 1 . . . . 
        . . . 1 f . 4 5 4 . f 1 . . . . 
        `)
})
let rocket: Sprite = null
let gravity = 0
let thrust = 0
let idle = 0
idle = 0
thrust = 10
gravity = 2
rocket = sprites.create(img`
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 f 1 . . . . . . . 
    . . . . . 1 f d 1 1 . . . . . . 
    . . . . . 1 f d d 1 . . . . . . 
    . . . . . 1 f d d 1 . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . 1 f f d 1 . . . . . . 
    . . . . 1 1 f f d 1 1 . . . . . 
    . . . . 1 1 f f d 1 1 . . . . . 
    . . . 1 d d f f d d d 1 . . . . 
    . . . 1 f d f f d d f 1 . . . . 
    . . . 1 f d f f d d f 1 . . . . 
    . . . 1 f d f f d d f 1 . . . . 
    . . . 1 f d f f d d f 1 . . . . 
    . . . 1 f . . . . . f 1 . . . . 
    . . . 1 f . . . . . f 1 . . . . 
    `, SpriteKind.Player)
rocket.ay = gravity
tiles.setTilemap(tiles.createTilemap(hex`18001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000040101050600000000000000000000000000000000000301000000000405020200000000000000000000000000000100000000000000040105000600000000000000060202010000000000000000000000040500000000000006040105000000000000000000000000000004050202020405000000000000000000000000000000000000000401050000000000000000`, img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    2222...................2
    ....2222..............2.
    ......222..........222..
    .........22.......222...
    ...........2222222......
    .............222........
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.collectibleInsignia,myTiles.tile3,myTiles.tile4,myTiles.tile6], TileScale.Sixteen))
scene.cameraFollowSprite(rocket)
effects.starField.startScreenEffect()
info.setLife(1000)
game.onUpdate(function () {
    if (controller.left.isPressed() || (controller.right.isPressed() || controller.down.isPressed())) {
        info.changeLifeBy(-1)
    }
})
