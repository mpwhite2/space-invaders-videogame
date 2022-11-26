namespace SpriteKind {
    export const Slime = SpriteKind.create()
}
function doSomething3 (num: number) {
    for (let index = 0; index < 8; index++) {
        Col += 1
        Alien1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Alien1,
        assets.animation`myAnim`,
        200,
        true
        )
        grid.place(Alien1, tiles.getTileLocation(Col, num))
        Alien1.vx = 2
    }
    Col = 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Slime, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Slime, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    list = sprites.allOfKind(SpriteKind.Enemy)
    Num = list.length
    for (let index = 0; index < Num; index++) {
        mySprite2 = list.pop()
        mySprite2.y += 5
        mySprite2.vx = 0 - mySprite2.vx
    }
})
function doSomething (num: number) {
    for (let index = 0; index < 8; index++) {
        Col += 1
        Alien1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Alien1,
        assets.animation`myAnim0`,
        200,
        true
        )
        grid.place(Alien1, tiles.getTileLocation(Col, num))
        Alien1.vx = 2
    }
    Col = 0
}
function doSomething2 (num: number) {
    for (let index = 0; index < 8; index++) {
        Col += 1
        Alien1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Alien1,
        assets.animation`myAnim1`,
        200,
        true
        )
        grid.place(Alien1, tiles.getTileLocation(Col, num))
        Alien1.vx = 2
    }
    Col = 0
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let projectile2: Sprite = null
let mySprite2: Sprite = null
let Num = 0
let list: Sprite[] = []
let projectile: Sprite = null
let Alien1: Sprite = null
let Col = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Ship`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(71, 108)
mySprite.setStayInScreen(true)
Col = 0
doSomething(0)
doSomething(1)
doSomething2(2)
doSomething3(3)
game.onUpdateInterval(100, function () {
    if (Math.percentChance(sprites.allOfKind(SpriteKind.Enemy).length)) {
        projectile2 = sprites.createProjectileFromSprite(img`
            7 . 
            . 7 
            . 7 
            7 . 
            `, sprites.allOfKind(SpriteKind.Enemy)._pickRandom(), 0, 40)
        projectile2.setKind(SpriteKind.Slime)
    }
    if (info.score() == 32) {
        game.over(true)
    }
})
