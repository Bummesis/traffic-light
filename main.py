def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(15000)
    pins.digital_write_pin(DigitalPin.P0, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

while True:
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(30000)
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(30000)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digital_write_pin(DigitalPin.P2, 0)