def on_button_pressed_a():
    for index in range(5):
        led.toggle(index, 0)
        basic.pause(100)
    for index2 in range(5):
        led.toggle(index2, 1)
        basic.pause(100)
    for index3 in range(5):
        led.toggle(index3, 2)
        basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for x in range(5):
        for y in range(5):
            led.plot(0, 0)
            basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
