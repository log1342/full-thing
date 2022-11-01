input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 0)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 1)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.toggle(index, 2)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(y, x)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
