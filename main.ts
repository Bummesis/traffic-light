input.onButtonPressed(Button.A, function on_button_pressed_a() {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(15000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
while (true) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(30000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(30000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
