input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    if (miuntes < 59) {
        miuntes += 1
    } else {
        miuntes = 0
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (steps > 10000) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.showNumber(steps)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else {
            if (hours == 0) {
                adjust = 12
            }
        }
    }
    time = "" + adjust
    time = "" + time + ":"
    if (miuntes < 10) {
        time = "" + time + "0"
    }
    time = "" + time + miuntes
    if (ampm) {
        if (hours > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
    }
    basic.showString(time)
})
let steps = 0
let hours = 0
let miuntes = 0
let adjust = 0
let time = ""
let ampm = false
ampm = false
time = ""
adjust = 0
miuntes = 0
hours = 0
steps = 0
basic.forever(function () {
    basic.pause(60000)
    if (miuntes < 59) {
        miuntes += 1
    } else {
        miuntes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
basic.forever(function () {
    led.setBrightness(input.lightLevel() + 10)
})
