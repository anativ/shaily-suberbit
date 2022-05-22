let on = 0
let dist = 0
input.onButtonPressed(Button.A, function () {
    if (0 == on) {
        on = 1
        basic.showIcon(IconNames.Square)
    } else {
        on = 0
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    on = 2
})
basic.forever(function () {
    if (1 == on) {
        makerbit.connectUltrasonicDistanceSensor(DigitalPin.P12, DigitalPin.P11)
        dist = makerbit.getUltrasonicDistance(DistanceUnit.CM)
        if (20 > dist) {
            basic.showNumber(1)
            music.playMelody("A A A A A A A A ", 120)
        } else if (50 > dist) {
            basic.showNumber(2)
            music.playMelody("B C5 B C5 B C5 B C5 ", 120)
        } else if (100 > dist) {
            basic.showNumber(3)
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        basic.showNumber(4)
        basic.pause(100)
    } else {
        basic.showIcon(IconNames.No)
    }
})
