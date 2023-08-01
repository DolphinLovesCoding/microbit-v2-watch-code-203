def on_button_pressed_a():
    global hours
    if hours < 23:
        hours += 1
    else:
        hours = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global adjust, time
    adjust = hours
    if ampm:
        if hours > 12:
            adjust = hours - 12
        else:
            if hours == 0:
                adjust = 12
    time = "" + str(hours) + (":" + str(miuntes))
    basic.show_string(time)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global ampm
    ampm = not (ampm)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global miuntes
    if miuntes < 59:
        miuntes += 1
    else:
        miuntes = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

hours = 0
miuntes = 0
adjust = 0
time = ""
ampm = False
ampm = False
time = ""
adjust = 0
miuntes = 0
hours = 0

def on_forever():
    global miuntes, hours
    basic.pause(60000)
    if miuntes < 59:
        miuntes += 1
    else:
        miuntes = 0
        if hours < 23:
            hours += 1
        else:
            hours = 0
basic.forever(on_forever)
