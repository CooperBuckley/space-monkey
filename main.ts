info.onCountdownEnd(function () {
    game.gameOver(true)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    c d e e d d d d e e d d f . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e b d c . f f 
    . f d d d d e e e f f c . f e f 
    . f f f f f f e e e e f . f e f 
    . f f f f e e e e e e e f f e f 
    f d d f d d f e f e e e e f f . 
    f d b f d b f e f e e e e f . . 
    f f f f f f f f f f f f e f . . 
    . . . . . . . . . f c d d f . . 
    . . . . . . . . . . f f f f . . 
    `, SpriteKind.Player)
info.setScore(0)
info.setLife(3)
mySprite.setBounceOnWall(true)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 5 5 . . 
    . . . . . . . . . . . 5 5 5 . . 
    . . . . . . . . . . . 5 5 5 . . 
    . . . . . . . . . . 5 5 5 . . . 
    . . . . . . . . 5 5 5 5 5 . . . 
    . . . . . . 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
info.startCountdown(90)
game.setGameOverMessage(false, "CUPCAKE GOT YOU!!")
game.setGameOverMessage(true, "GET BOZO'D CUPCAKE!!")
game.onUpdateInterval(9000, function () {
    mySprite2 = sprites.create(img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c999b2222222222222fc..
        .c2b99111b222222222c22c.
        c222b111992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222442222f.....
        ..ff2222222cf442222f....
        ....ffffffffff442222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 150), randint(0, 110))
})
forever(function () {
    controller.moveSprite(mySprite, 150, 150)
    if (mySprite.overlapsWith(mySprite2)) {
        info.changeLifeBy(-1)
        mySprite2.setPosition(randint(10, 140), randint(10, 110))
    }
    if (mySprite.overlapsWith(mySprite3)) {
        info.changeScoreBy(1)
    }
    if (mySprite.overlapsWith(mySprite3)) {
        mySprite3.setPosition(randint(10, 140), randint(10, 110))
    }
    if (mySprite2.overlapsWith(mySprite3)) {
        mySprite3.setPosition(randint(10, 140), randint(10, 110))
    }
    if (mySprite2.overlapsWith(mySprite2)) {
        mySprite2.setPosition(randint(10, 140), randint(10, 110))
    }
    game.setGameOverScoringType(game.ScoringType.HighScore)
    mySprite2.follow(mySprite, 25)
})
