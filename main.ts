let number = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    IronMan()
})
function roll () {
    number = randint(1, 6)
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (number == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    } else if (number == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (number == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
    basic.pause(500)
    if (number == 1) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    }
    if (number == 6) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
}
function IronMan () {
    music.playTone(131, music.beat(BeatFraction.Double))
    music.playTone(156, music.beat(BeatFraction.Double))
    music.playTone(156, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(208, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(208, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(208, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(156, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Half))
    music.playTone(156, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    if (true) {
        basic.showNumber(randint(1, 20))
    } else {
        basic.clearScreen()
        roll()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index <= 100; index++) {
        music.playTone(randint(100, 1000), music.beat(BeatFraction.Eighth))
    }
})
