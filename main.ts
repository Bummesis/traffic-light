let count_down_red = 0
let button_a = 0
let count_down_green = 0
let count_down_yellow = 0
function red_light2 () {
    count_down_red = 8
    pins.digitalWritePin(DigitalPin.P0, 1)
    for (let index = 0; index < 9; index++) {
        basic.showNumber(count_down_red)
        basic.pause(10)
        count_down_red += -1
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    button_a = 0
}
function traffic_light () {
    green_light()
    yellow_light()
    red_light()
}
function green_light () {
    count_down_green = 5
    pins.digitalWritePin(DigitalPin.P1, 1)
    for (let index = 0; index < 6; index++) {
        if (button_a) {
            break;
        }
        basic.showNumber(count_down_green)
        basic.pause(10)
        count_down_green += -1
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function yellow_light2 () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # # . # #
            . # # # .
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
function red_light () {
    count_down_red = 8
    pins.digitalWritePin(DigitalPin.P0, 1)
    for (let index = 0; index < 9; index++) {
        if (button_a) {
            break;
        }
        basic.showNumber(count_down_red)
        basic.pause(10)
        count_down_red += -1
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function yellow_light () {
    count_down_yellow = 3
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 4; index++) {
        if (button_a) {
            break;
        }
        basic.showNumber(count_down_yellow)
        basic.pause(10)
        count_down_yellow += -1
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        button_a = 1
        yellow_light2()
        red_light2()
    }
})
basic.forever(function () {
    if (button_a) {
    	
    } else {
        traffic_light()
    }
})
