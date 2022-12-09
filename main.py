count_down_red = 0
button_a = 0
count_down_green = 0
count_down_yellow = 0
def red_light2():
    global count_down_red, button_a
    count_down_red = 8
    pins.digital_write_pin(DigitalPin.P0, 1)
    for index in range(9):
        basic.show_number(count_down_red)
        basic.pause(10)
        count_down_red += -1
    pins.digital_write_pin(DigitalPin.P0, 0)
    button_a = 0
def traffic_light():
    green_light()
    yellow_light()
    red_light()
def green_light():
    global count_down_green
    count_down_green = 5
    pins.digital_write_pin(DigitalPin.P1, 1)
    for index2 in range(6):
        if button_a:
            break
        basic.show_number(count_down_green)
        basic.pause(10)
        count_down_green += -1
    pins.digital_write_pin(DigitalPin.P1, 0)
def yellow_light2():
    global count_down_yellow
    count_down_yellow = 3
    pins.digital_write_pin(DigitalPin.P2, 1)
    for index3 in range(4):
        basic.show_number(count_down_yellow)
        basic.pause(10)
        count_down_yellow += -1
    pins.digital_write_pin(DigitalPin.P2, 0)
def red_light():
    global count_down_red
    count_down_red = 8
    pins.digital_write_pin(DigitalPin.P0, 1)
    for index4 in range(9):
        if button_a:
            break
        basic.show_number(count_down_red)
        basic.pause(10)
        count_down_red += -1
    pins.digital_write_pin(DigitalPin.P0, 0)
def yellow_light():
    global count_down_yellow
    count_down_yellow = 3
    pins.digital_write_pin(DigitalPin.P2, 1)
    for index5 in range(4):
        if button_a:
            break
        basic.show_number(count_down_yellow)
        basic.pause(10)
        count_down_yellow += -1
    pins.digital_write_pin(DigitalPin.P2, 0)

def on_forever():
    global button_a
    if input.button_is_pressed(Button.A):
        button_a = 1
        yellow_light2()
        red_light2()
basic.forever(on_forever)

def on_forever2():
    if button_a:
        pass
    else:
        traffic_light()
basic.forever(on_forever2)