namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const projectile2 = SpriteKind.create()
    export const projectile3 = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const blast = SpriteKind.create()
    export const hurt = SpriteKind.create()
    export const kindle = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (select < 3) {
        select += 1
    }
    if (repeat == 1) {
        repeat = 2
    }
    pause(100)
    if (repeat <= 1) {
        if (select > 2) {
            if (direction == 1) {
                if (special >= 50) {
                    special = 0
                    projectile4 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        `, mySprite, 0, 0)
                    projectile4.setKind(SpriteKind.Player)
                    special = 0
                    pause(1000)
                    for (let index = 0; index < 50; index++) {
                        projectile32 = sprites.createProjectileFromSprite(img`
                            ...98888..
                            .999888...
                            9988888...
                            98888888..
                            988888888.
                            8888888...
                            888888....
                            8888......
                            888.......
                            8888......
                            888888....
                            8888888...
                            88888888..
                            8888888...
                            888888....
                            888888....
                            8888888...
                            888888888.
                            88888888..
                            888888....
                            888888....
                            888888....
                            888888....
                            88888888..
                            88888888..
                            888888....
                            88888.....
                            88888.....
                            98888888..
                            98888888..
                            9988888...
                            .999888...
                            `, mySprite, 300, 0)
                        projectile32.setFlag(SpriteFlag.GhostThroughWalls, true)
                        pause(10)
                    }
                    special = 0
                }
            }
            if (direction == 2) {
                if (special >= 50) {
                    special = 0
                    projectile4 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        `, mySprite, 0, 0)
                    projectile4.setKind(SpriteKind.Player)
                    special = 0
                    pause(1000)
                    for (let index = 0; index < 50; index++) {
                        projectile32 = sprites.createProjectileFromSprite(img`
                            ..88889...
                            ...888999.
                            ...8888899
                            ..88888889
                            .888888889
                            ...8888888
                            ....888888
                            ......8888
                            .......888
                            ......8888
                            ....888888
                            ...8888888
                            ..88888888
                            ...8888888
                            ....888888
                            ....888888
                            ...8888888
                            .888888888
                            ..88888888
                            ....888888
                            ....888888
                            ....888888
                            ....888888
                            ..88888888
                            ..88888888
                            ....888888
                            .....88888
                            .....88888
                            ..88888889
                            ..88888889
                            ...8888899
                            ...888999.
                            `, mySprite, -300, 0)
                        projectile32.setFlag(SpriteFlag.GhostThroughWalls, true)
                        pause(10)
                    }
                    special = 0
                }
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inkzooka == 0) {
        if (direction == 1) {
            fire = 1
        }
        if (direction == 2) {
            fire = 2
        }
    }
    if (inkzooka == 1) {
        if (direction == 1) {
            fire1 = 1
        }
        if (direction == 2) {
            fire1 = 2
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (select < 3) {
        select += 10
    }
    if (jump == 0) {
        mySprite.vy = -190
        pause(100)
        jump = 1
    }
    if (easter_egg == 5) {
        easter_egg = 10
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.player2, function (sprite, otherSprite) {
    if (kraken == 1) {
        hp1 += -20
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (kraken == 0) {
        if (inkzooka == 0) {
            direction = 2
            mySprite.setImage(img`
                . . . . . . . f f f f f . 
                . . . . . . f 8 8 8 8 f . 
                . . . . f f 5 8 8 8 f . . 
                . . . f 8 8 8 5 5 f . . . 
                . . . f d d d 8 8 f . . . 
                . . . f d d d d 8 f . . . 
                . . . f d d d d 8 8 f . . 
                . . . f d d d d 8 8 f . . 
                . . . . f 1 1 1 f 2 f . . 
                . . . f 8 5 8 1 7 7 7 f . 
                . . f f 8 5 8 2 8 8 8 f . 
                . f 7 5 5 5 5 2 8 8 8 f . 
                . . f f f 5 5 1 8 8 8 f . 
                . . . . f f f f 7 7 7 f . 
                . . . . f a a a f f f . . 
                . . . . . f f f . . . . . 
                `)
        }
    }
    if (kraken == 1) {
        if (inkzooka == 0) {
            direction = 1
            mySprite.setImage(img`
                . . . . . . f 8 8 f . . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . f 8 1 8 8 8 8 f . . . . 
                . . . f 8 1 8 8 8 8 8 8 f . . . 
                . . f 8 8 1 8 8 8 8 8 8 8 f . . 
                . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                . f 8 8 f f 1 f f 1 f 8 8 8 c f 
                . f c c f f 1 f f 1 f 8 c c f . 
                . . f f 1 1 1 1 1 1 f 8 f f . . 
                . . . f f f f f f f 8 8 f . . . 
                . . . f 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 c 8 c 8 c 8 c 8 8 f . . 
                . . f 8 f 8 f 8 f 8 f 8 8 8 f . 
                . . f f 8 f . f . f . f 8 8 8 f 
                . f c 8 8 f . . . . f f 8 8 8 f 
                `)
        }
    }
    if (kraken == 0) {
        if (inkzooka == 1) {
            direction = 2
            mySprite.setImage(img`
                . . . . . . . f f f f f . . . 
                . . . . . . f 8 8 8 8 f . . . 
                . . . . f f 5 8 8 8 f . . . . 
                . . . f 8 8 8 5 5 f . . . . . 
                . . . f d d d 8 8 f . . . . . 
                . . . f d d d d 8 f . . . . . 
                . . f f d d d d 8 8 f . . . . 
                . f 6 f f f f f f f f f f f f 
                f 2 6 7 6 6 6 7 7 7 7 2 2 2 f 
                f 2 6 7 7 6 6 7 7 7 7 2 2 2 f 
                . f 6 f f 6 6 f f f f f f f f 
                . . f f f f f f 8 8 8 f . . . 
                . . . . f 1 1 f 8 8 8 f . . . 
                . . . . f f f f 7 7 7 f . . . 
                . . . . f a a a f f f . . . . 
                . . . . . f f f . . . . . . . 
                `)
        }
    }
    if (repeat < 1) {
        repeat = 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.blast, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
    tiles.placeOnTile(sprite, tiles.getTileLocation(100, 100))
    boss_health += -2
    special += 1
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.Player, function (sprite, otherSprite) {
    if (kraken1 == 1) {
        hp += -20
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (kraken == 0) {
        if (inkzooka == 0) {
            direction = 1
            mySprite.setImage(img`
                . f f f f f . . . . . . . 
                . f 8 8 8 8 f . . . . . . 
                . . f 8 8 8 5 f f . . . . 
                . . . f 5 5 8 8 8 f . . . 
                . . . f 8 8 d d d f . . . 
                . . . f 8 d d d d f . . . 
                . . f 8 8 d d d d f . . . 
                . . f 8 8 d d d d f . . . 
                . . f 2 f 1 1 1 f . . . . 
                . f 7 7 7 1 8 5 8 f . . . 
                . f 8 8 8 2 8 5 8 f f . . 
                . f 8 8 8 2 5 5 5 5 7 f . 
                . f 8 8 8 1 5 5 f f f . . 
                . f 7 7 7 f f f f . . . . 
                . . f f f a a a f . . . . 
                . . . . . f f f . . . . . 
                `)
        }
    }
    if (kraken == 1) {
        if (inkzooka == 0) {
            direction = 1
            mySprite.setImage(img`
                . . . . . . f 8 8 f . . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . f 8 8 8 8 1 8 f . . . . 
                . . . f 8 8 8 8 8 8 1 8 f . . . 
                . . f 8 8 8 8 8 8 8 1 8 8 f . . 
                . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
                f c 8 8 8 f 1 f f 1 f f 8 8 f . 
                . f c c 8 f 1 f f 1 f f c c f . 
                . . f f 8 f 1 1 1 1 1 1 f f . . 
                . . . f 8 8 f f f f f f f . . . 
                . . . f 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 c 8 c 8 c 8 c 8 f . . 
                . f 8 8 8 f 8 f 8 f 8 f 8 f . . 
                f 8 8 8 f . f . f . f 8 f f . . 
                f 8 8 8 f f . . . . f 8 8 c f . 
                `)
        }
    }
    if (kraken == 0) {
        if (inkzooka == 1) {
            direction = 1
            mySprite.setImage(img`
                . . . f f f f f . . . . . . . 
                . . . f 8 8 8 8 f . . . . . . 
                . . . . f 8 8 8 5 f f . . . . 
                . . . . . f 5 5 8 8 8 f . . . 
                . . . . . f 8 8 d d d f . . . 
                . . . . . f 8 d d d d f . . . 
                . . . . f 8 8 d d d d f f . . 
                f f f f f f f f f f f f 6 f . 
                f 2 2 2 7 7 7 7 6 6 6 7 6 2 f 
                f 2 2 2 7 7 7 7 6 6 7 7 6 2 f 
                f f f f f f f f 6 6 f f 6 f . 
                . . . f 8 8 8 f f f f f f . . 
                . . . f 8 8 8 f 1 1 f . . . . 
                . . . f 7 7 7 f f f f . . . . 
                . . . . f f f a a a f . . . . 
                . . . . . . . f f f . . . . . 
                `)
        }
    }
})
sprites.onOverlap(SpriteKind.kindle, SpriteKind.blast, function (sprite, otherSprite) {
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
    otherSprite.destroy()
    boss_health += -2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.projectile2, function (sprite, otherSprite) {
    otherSprite.destroy()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
    hp += -1
    special2 += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (select < 3) {
        select += -1
    }
    if (select > 2) {
        if (special >= 50) {
            kraken = 1
            special = 0
            mySprite.setImage(img`
                . . . . . . f 8 8 f . . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . f 8 8 8 8 1 8 f . . . . 
                . . . f 8 8 8 8 8 8 1 8 f . . . 
                . . f 8 8 8 8 8 8 8 1 8 8 f . . 
                . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
                f c 8 8 8 f 1 f f 1 f f 8 8 f . 
                . f c c 8 f 1 f f 1 f f c c f . 
                . . f f 8 f 1 1 1 1 1 1 f f . . 
                . . . f 8 8 f f f f f f f . . . 
                . . . f 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 c 8 c 8 c 8 c 8 f . . 
                . f 8 8 8 f 8 f 8 f 8 f 8 f . . 
                f 8 8 8 f . f . f . f 8 f f . . 
                f 8 8 8 f f . . . . f 8 8 c f . 
                `)
            mySprite.setKind(SpriteKind.Player)
            pause(5000)
            kraken = 0
            mySprite.setImage(img`
                . f f f f f . . . . . . . 
                . f 8 8 8 8 f . . . . . . 
                . . f 8 8 8 5 f f . . . . 
                . . . f 5 5 8 8 8 f . . . 
                . . . f 8 8 d d d f . . . 
                . . . f 8 d d d d f . . . 
                . . f 8 8 d d d d f . . . 
                . . f 8 8 d d d d f . . . 
                . . f 2 f 1 1 1 f . . . . 
                . f 7 7 7 1 8 5 8 f . . . 
                . f 8 8 8 2 8 5 8 f f . . 
                . f 8 8 8 2 5 5 5 5 7 f . 
                . f 8 8 8 1 5 5 f f f . . 
                . f 7 7 7 f f f f . . . . 
                . . f f f a a a f . . . . 
                . . . . . f f f . . . . . 
                `)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    fire = 0
    fire1 = 0
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
    hp1 += -1
    special += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.blast, function (sprite, otherSprite) {
    if (kraken == 0) {
        otherSprite.destroy()
        tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
        hp += -1
    }
    if (kraken == 1) {
        otherSprite.destroy()
        tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
        boss_health += -2
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.projectile3, function (sprite, otherSprite) {
    otherSprite.destroy()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
    hp += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    controller.moveSprite(mySprite, 0, 0)
    mySprite.vx = -100
    pause(200)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.vx = 0
})
let check = 0
let dead = 0
let special2 = 0
let fire1 = 0
let projectile32: Sprite = null
let projectile4: Sprite = null
let repeat = 0
let inkzooka = 0
let kraken1 = 0
let kraken = 0
let fire = 0
let direction = 0
let jump = 0
let easter_egg = 0
let mySprite: Sprite = null
let select = 0
let special = 0
let jump2 = 0
let rank_get = 0
let health_save = 0
special = 48
select = 12
let mysterious = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.Boss)
mySprite = sprites.create(img`
    . f f f f f . . . . . . . 
    . f 8 8 8 8 f . . . . . . 
    . . f 8 8 8 5 f f . . . . 
    . . . f 5 5 8 8 8 f . . . 
    . . . f 8 8 d d d f . . . 
    . . . f 8 d d d d f . . . 
    . . f 8 8 d d d d f . . . 
    . . f 8 8 d d d d f . . . 
    . . f 2 f 1 1 1 f . . . . 
    . f 7 7 7 1 8 5 8 f . . . 
    . f 8 8 8 2 8 5 8 f f . . 
    . f 8 8 8 2 5 5 5 5 7 f . 
    . f 8 8 8 1 5 5 f f f . . 
    . f 7 7 7 f f f f . . . . 
    . . f f f a a a f . . . . 
    . . . . . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
let projectile = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let tornado = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.kindle)
let projectile22 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.projectile2)
let projectile5 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.projectile2)
let blast2 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.blast)
mySprite.ay = 500
tiles.setTilemap(tilemap`level14`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 4))
tiles.placeOnTile(tornado, tiles.getTileLocation(100, 4))
tiles.placeOnTile(projectile, tiles.getTileLocation(100, 100))
tiles.placeOnTile(projectile22, tiles.getTileLocation(100, 100))
tiles.placeOnTile(projectile5, tiles.getTileLocation(100, 100))
tiles.placeOnTile(mysterious, tiles.getTileLocation(100, 100))
let cpu = randint(1, 4)
let boss_health = 100
easter_egg = 10
jump = 0
let tank = 50
let tank1 = 50
direction = 1
let direction1 = 2
fire = 0
let hp = 20
let hp1 = 20
special = 0
kraken = 0
kraken1 = 0
inkzooka = 0
repeat = 0
game.onUpdateInterval(5000, function () {
    repeat = 0
})
forever(function () {
    if (direction == 2 && fire == 1) {
        fire = 2
    }
})
forever(function () {
    if (boss_health == 100) {
        mysterious.setImage(img`
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ...............ddddddddddddddddddddd............
            .............ddddddddddddddddddddddddd..........
            ............ddddddddddddddddddddddddddd.........
            ...........ddddddddddddddddddddddddddddd........
            .........dddddddddddddddddddddddddddddddd.......
            ........ddddddddddddbbbbbbbbbbbbdddddddddd......
            .......dddddddddddbbbbbbbbbbbbbbbddddddddd......
            .......dddddddddbbbbbbbbbbbbbbbbbbddddddddd.....
            .......ddddddddaaaabbbbbbbbbbbbbaaadddddddd.....
            .......ddddddbaaaaabbbbbbbbbbbbbaaaaaddddddd....
            .......dddddbbaaaaabbbbbbbbbbbbbaaaaaddddddd....
            .......dddddbbaaaaabbbbbbbbbbbbbaaaaabdddddd....
            .......ddddddbaaaaabbbbbbbbbbbbbaaaaabdddddd....
            .......ddddddbbbbbbbbbbbbbbbbbbbbbbbbddddddd....
            .......ddddddbbbbbbbbbbbbbbbbbbbbbbbdddddddd....
            .......ddddddbbbbbbbbbbbbbbbbbbbbbbbdddddddd....
            ........dddddbbbbbbbbbbccccbbbbbbbbbdddddddd....
            ........dddddbbbbbbbbccccccccbbbbbbbddddddd.....
            .........bbbbbbbbbbbbcccccccccbbbbbbdddddd......
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbbcccccccbbbbbbbb...........
            .........bbbbbbbbbbbbbbbbcccbbbbbbbbb...........
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbb............
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbb............
            ...........bbbbbbbbbbbbbbbbbbbbbbbbb............
            ............bbbbbbbbbbbbbbbbbbbbbbb.............
            ............bbbbbbbbbbbbbbbbbbbbbb..............
            .............bbbbbbbbbbbbbbbbbbbbb..............
            ..............bbbbbbbbbbbbbbbbbbbb..............
            ..............bbbbbbbbbbbbbbbbbbbb..............
            ..............bbbbbbbbbbbbbbbbbbbb..............
            ...............bbbbbbbbbbbbbbbbbbb..............
            ...............bbbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ...............bbbbbbbbbbbbbbbbbbbb.............
            ...............bbbbbbbbbbbbbbbbbbbbb............
            ..............bbbbbbbbbbbbbbbbbbbbbb............
            ..............bbbbbbbbbbbbbbbbbbbbbbb...........
            .............bbbbbbbbbbbbbbbbbbbbbbbb...........
            ............bbbbbbbbbbbbbbbbbbbbbbbbbb..........
            ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
            ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            .........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            .............bbbbbbbbbbbbbbbbbbbbbbbbbbb........
            ..............bbbbbbbbbbbbbbbbbbbbbbbbbb........
            ................bbbbbbbbbbbbbbbbbbbbbbb.........
            ..................bbbbbbbbbbbbbbbbbbb...........
            .......................bbbbbbbb.................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            `)
        mysterious.setFlag(SpriteFlag.GhostThroughWalls, true)
        tiles.placeOnTile(mysterious, tiles.getTileLocation(5, 8))
        boss_health += -2
    }
    if (boss_health == 80) {
        mysterious.setImage(assets.image`Temporary asset`)
        easter_egg = 12
        boss_health += -2
        mysterious.vx = 100
        pause(1000)
        mysterious.vx = 0
    }
    if (boss_health == 60) {
        mysterious.setImage(assets.image`Temporary asset0`)
        easter_egg = 13
        boss_health += -2
        mysterious.vx = 100
        pause(1000)
        mysterious.vx = 0
    }
    if (boss_health == 40) {
        mysterious.setImage(assets.image`Temporary asset1`)
        easter_egg = 14
        boss_health += -2
        mysterious.vx = 100
        pause(1000)
        mysterious.vx = 0
    }
    if (boss_health == 20) {
        mysterious.setImage(assets.image`Temporary asset2`)
        easter_egg = 15
        boss_health += -2
        mysterious.vx = 100
        pause(1000)
        mysterious.vx = 0
    }
    if (boss_health == 0) {
        easter_egg = 20
        pause(5000)
        game.splash("What?", "How did you completely cover me?")
        easter_egg = 16
    }
    if (boss_health == -100) {
        game.splash("You Win!")
    }
})
forever(function () {
    if (direction == 1 && fire == 2) {
        fire = 1
    }
})
forever(function () {
    if (special >= 50) {
        tiles.setTilemap(tilemap`level17`)
        special = 100
    }
})
forever(function () {
    if (hp <= 0) {
        hp = 20
        dead = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(100, 100))
        pause(5000)
        tiles.placeOnRandomTile(mySprite, assets.tile`Level1`)
        dead = 0
    }
})
forever(function () {
    if (tank > 0) {
        if (fire == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                `, mySprite, -150, 0)
            projectile.ay = 200
            tank += -1
            pause(100)
        }
    }
})
forever(function () {
    if (special == 0) {
        tiles.setTilemap(tilemap`level14`)
    }
})
forever(function () {
    if (tank > 50) {
        tank = 50
    }
})
forever(function () {
    if (tank < 0) {
        tank = 0
    }
})
forever(function () {
    if (fire == 0) {
        tank += 1
        pause(100)
    }
})
forever(function () {
    if (fire1 == 0) {
        tank1 += 1
        pause(500)
    }
})
forever(function () {
    if (tank > 0) {
        if (fire == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                `, mySprite, 150, 0)
            projectile.ay = 200
            tank += -1
            pause(100)
        }
    }
})
forever(function () {
    if (easter_egg >= 11) {
        if (dead == 1) {
            easter_egg += -1
            boss_health += 20
        }
    }
    if (easter_egg < 11) {
        if (check == 1) {
            easter_egg = 11
        }
    }
    if (boss_health > 100) {
        if (check == 1) {
            boss_health = 100
        }
    }
})
forever(function () {
    projectile5.setKind(SpriteKind.projectile2)
})
forever(function () {
    if (easter_egg == 10) {
        scene.setBackgroundImage(img`
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setTilemap(tilemap`level14`)
        tiles.placeOnTile(mysterious, tiles.getTileLocation(5, 8))
        mysterious.setImage(img`
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ...............ddddddddddddddddddddd............
            .............ddddddddddddddddddddddddd..........
            ............ddddddddddddddddddddddddddd.........
            ...........ddddddddddddddddddddddddddddd........
            .........dddddddddddddddddddddddddddddddd.......
            ........ddddddddddddbbbbbbbbbbbbdddddddddd......
            .......dddddddddddbbbbbbbbbbbbbbbddddddddd......
            .......dddddddddbbbbbbbbbbbbbbbbbbddddddddd.....
            .......ddddddddaaaabbbbbbbbbbbbbaaadddddddd.....
            .......ddddddbaaaaabbbbbbbbbbbbbaaaaaddddddd....
            .......dddddbbaaaaabbbbbbbbbbbbbaaaaaddddddd....
            .......dddddbbaaaaabbbbbbbbbbbbbaaaaabdddddd....
            .......ddddddbaaaaabbbbbbbbbbbbbaaaaabdddddd....
            .......ddddddbbbbbbbbbbbbbbbbbbbbbbbbddddddd....
            .......ddddddbbbbbbbbbbbbbbbbbbbbbbbdddddddd....
            .......ddddddbbbbbbbbbbbbbbbbbbbbbbbdddddddd....
            ........dddddbbbbbbbbbbccccbbbbbbbbbdddddddd....
            ........dddddbbbbbbbbccccccccbbbbbbbddddddd.....
            .........bbbbbbbbbbbbcccccccccbbbbbbdddddd......
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbcccccccccbbbbbbbb..........
            .........bbbbbbbbbbbbbcccccccbbbbbbbb...........
            .........bbbbbbbbbbbbbbbbcccbbbbbbbbb...........
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbb............
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbb............
            ...........bbbbbbbbbbbbbbbbbbbbbbbbb............
            ............bbbbbbbbbbbbbbbbbbbbbbb.............
            ............bbbbbbbbbbbbbbbbbbbbbb..............
            .............bbbbbbbbbbbbbbbbbbbbb..............
            ..............bbbbbbbbbbbbbbbbbbbb..............
            ..............bbbbbbbbbbbbbbbbbbbb..............
            ..............bbbbbbbbbbbbbbbbbbbb..............
            ...............bbbbbbbbbbbbbbbbbbb..............
            ...............bbbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ................bbbbbbbbbbbbbbbbbb..............
            ...............bbbbbbbbbbbbbbbbbbbb.............
            ...............bbbbbbbbbbbbbbbbbbbbb............
            ..............bbbbbbbbbbbbbbbbbbbbbb............
            ..............bbbbbbbbbbbbbbbbbbbbbbb...........
            .............bbbbbbbbbbbbbbbbbbbbbbbb...........
            ............bbbbbbbbbbbbbbbbbbbbbbbbbb..........
            ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
            ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            .........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
            ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
            .............bbbbbbbbbbbbbbbbbbbbbbbbbbb........
            ..............bbbbbbbbbbbbbbbbbbbbbbbbbb........
            ................bbbbbbbbbbbbbbbbbbbbbbb.........
            ..................bbbbbbbbbbbbbbbbbbb...........
            .......................bbbbbbbb.................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            ................................................
            `)
        mysterious.setFlag(SpriteFlag.GhostThroughWalls, true)
        mysterious.vy = -9
        scene.cameraShake(5, 10000)
        pause(10000)
        mysterious.vy = 0
        easter_egg = 11
        check = 1
        info.startCountdown(180)
    }
})
forever(function () {
    if (select == 12) {
        if (easter_egg == 11) {
            pause(1000)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 0, 0)
            blast2.setKind(SpriteKind.blast)
            blast2.follow(mySprite, 30)
        }
    }
})
forever(function () {
    if (select == 12) {
        if (easter_egg == 16) {
            pause(200)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 0, 0)
            blast2.setKind(SpriteKind.blast)
            blast2.follow(mySprite, 50)
        }
    }
})
forever(function () {
    if (select == 12) {
        if (easter_egg == 14) {
            pause(200)
            blast2 = sprites.createProjectileFromSide(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, 100, 0)
            tiles.placeOnTile(blast2, tiles.getTileLocation(0, Math.round(randint(1, 6))))
            blast2.setKind(SpriteKind.blast)
        }
    }
})
forever(function () {
    if (select == 12) {
        if (easter_egg == 12) {
            pause(500)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 0, 0)
            blast2.setKind(SpriteKind.blast)
            blast2.follow(mySprite, 50)
        }
    }
})
forever(function () {
    if (select == 12) {
        if (easter_egg == 13) {
            pause(200)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 0, 0)
            blast2.setKind(SpriteKind.blast)
            tiles.placeOnTile(blast2, tiles.getTileLocation(Math.round(randint(0, 9)), 0))
            blast2.vy = 100
        }
    }
})
forever(function () {
    blast2.setFlag(SpriteFlag.GhostThroughTiles, true)
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`Tile`)) {
        jump = 0
    }
})
forever(function () {
    if (select == 12) {
        if (easter_egg == 15) {
            pause(200)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 50, 50)
            blast2.setKind(SpriteKind.blast)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, -50, 50)
            blast2.setKind(SpriteKind.blast)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 50, -50)
            blast2.setKind(SpriteKind.blast)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, -50, -50)
            blast2.setKind(SpriteKind.blast)
            pause(200)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 0, 50)
            blast2.setKind(SpriteKind.blast)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 0, -50)
            blast2.setKind(SpriteKind.blast)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, 50, 0)
            blast2.setKind(SpriteKind.blast)
            blast2 = sprites.createProjectileFromSprite(img`
                . . . . 7 . . . 7 . . . 7 . . . 
                . . . 7 7 7 . 7 7 7 . 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 
                7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 . 
                . 7 7 7 7 7 6 6 6 6 6 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 . 7 7 7 . 7 7 7 . . . 
                . . . 7 . . . 7 . . . 7 . . . . 
                `, mysterious, -50, 0)
            blast2.setKind(SpriteKind.blast)
        }
    }
})
forever(function () {
    if (fire1 == 2) {
        tornado = sprites.createProjectileFromSprite(img`
            ..88888888888..
            .8888888888888.
            8ffff8888888888
            88888ffffff8888
            8888888fff88888
            888888888ff8888
            8888888888ff888
            888888888888ff8
            8888888888888f8
            8888888888888f8
            8fff88888888888
            888ffff88888888
            8888888fff88888
            888888888fff888
            888888888888ff8
            8888888888888ff
            ffff88888888888
            888fff888888888
            88888fff8888888
            8888888ff888888
            888888888fff888
            88888888888ff88
            888888888888ff8
            8888888888888ff
            888888888888888
            888888888888888
            888888888888888
            fff888888888888
            88fffff88888888
            888888ff8888888
            88888888f888888
            88888888ff88888
            888888888ff8888
            8888888888ff888
            888888888888f88
            8888888888888f8
            88888888888888f
            88888888888888f
            888888888888888
            f88888888888888
            fff888888888888
            888ffff88888888
            8888888ff888888
            88888888f888888
            88888888ff88888
            .88888888fff88.
            .8888888888ff8.
            .88888888888f8.
            .8888888888888.
            .8888888888888.
            .8fffffffff888.
            .888888888ff88.
            .8888888888ff8.
            .88888888888f8.
            .8888888888888.
            ..88888888888..
            ..88888888888..
            ..8fffff88888..
            ..88888ffff88..
            ..88888888ff8..
            ..88888888888..
            ..88888888888..
            ...888888888...
            ...fffff8888...
            ...8888ffff8...
            ...8888888ff...
            ...888888888...
            ....ffff888....
            ....88.fff8....
            .....8.8.8.....
            .......8.......
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            `, mySprite, -200, -100)
        tornado.setKind(SpriteKind.kindle)
        tornado.ay = 300
        pause(1000)
    }
})
forever(function () {
    if (fire1 == 1) {
        tornado = sprites.createProjectileFromSprite(img`
            ..88888888888..
            .8888888888888.
            8ffff8888888888
            88888ffffff8888
            8888888fff88888
            888888888ff8888
            8888888888ff888
            888888888888ff8
            8888888888888f8
            8888888888888f8
            8fff88888888888
            888ffff88888888
            8888888fff88888
            888888888fff888
            888888888888ff8
            8888888888888ff
            ffff88888888888
            888fff888888888
            88888fff8888888
            8888888ff888888
            888888888fff888
            88888888888ff88
            888888888888ff8
            8888888888888ff
            888888888888888
            888888888888888
            888888888888888
            fff888888888888
            88fffff88888888
            888888ff8888888
            88888888f888888
            88888888ff88888
            888888888ff8888
            8888888888ff888
            888888888888f88
            8888888888888f8
            88888888888888f
            88888888888888f
            888888888888888
            f88888888888888
            fff888888888888
            888ffff88888888
            8888888ff888888
            88888888f888888
            88888888ff88888
            .88888888fff88.
            .8888888888ff8.
            .88888888888f8.
            .8888888888888.
            .8888888888888.
            .8fffffffff888.
            .888888888ff88.
            .8888888888ff8.
            .88888888888f8.
            .8888888888888.
            ..88888888888..
            ..88888888888..
            ..8fffff88888..
            ..88888ffff88..
            ..88888888ff8..
            ..88888888888..
            ..88888888888..
            ...888888888...
            ...fffff8888...
            ...8888ffff8...
            ...8888888ff...
            ...888888888...
            ....ffff888....
            ....88.fff8....
            .....8.8.8.....
            .......8.......
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            ...............
            `, mySprite, 200, -100)
        tornado.setKind(SpriteKind.kindle)
        tornado.ay = 300
        pause(1000)
    }
})
forever(function () {
    if (repeat == 2) {
        if (special >= 50) {
            inkzooka = 1
            special = 0
            mySprite.setImage(img`
                . . . . . . . f f f f f . . . 
                . . . . . . f 8 8 8 8 f . . . 
                . . . . f f 5 8 8 8 f . . . . 
                . . . f 8 8 8 5 5 f . . . . . 
                . . . f d d d 8 8 f . . . . . 
                . . . f d d d d 8 f . . . . . 
                . . f f d d d d 8 8 f . . . . 
                . f 6 f f f f f f f f f f f f 
                f 2 6 7 6 6 6 7 7 7 7 2 2 2 f 
                f 2 6 7 7 6 6 7 7 7 7 2 2 2 f 
                . f 6 f f 6 6 f f f f f f f f 
                . . f f f f f f 8 8 8 f . . . 
                . . . . f 1 1 f 8 8 8 f . . . 
                . . . . f f f f 7 7 7 f . . . 
                . . . . f a a a f f f . . . . 
                . . . . . f f f . . . . . . . 
                `)
            mySprite.setKind(SpriteKind.Player)
            pause(10000)
            inkzooka = 0
            mySprite.setImage(img`
                . f f f f f . . . . . . . 
                . f 8 8 8 8 f . . . . . . 
                . . f 8 8 8 5 f f . . . . 
                . . . f 5 5 8 8 8 f . . . 
                . . . f 8 8 d d d f . . . 
                . . . f 8 d d d d f . . . 
                . . f 8 8 d d d d f . . . 
                . . f 8 8 d d d d f . . . 
                . . f 2 f 1 1 1 f . . . . 
                . f 7 7 7 1 8 5 8 f . . . 
                . f 8 8 8 2 8 5 8 f f . . 
                . f 8 8 8 2 5 5 5 5 7 f . 
                . f 8 8 8 1 5 5 f f f . . 
                . f 7 7 7 f f f f . . . . 
                . . f f f a a a f . . . . 
                . . . . . f f f . . . . . 
                `)
        }
    }
})
