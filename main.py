def on_button_pressed_a():
    global mottatt2
    mottatt2 = "Annet"
input.on_button_pressed(Button.A, on_button_pressed_a)

def drive(mottatt: str):
    if mottatt == "Pil V":
        servos.P2.run(-1 * max_fart)
        servos.P0.run(0)
        basic.pause(svingetid)
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
        servos.P0.stop()
        servos.P2.stop()
    elif mottatt == "Pil H":
        servos.P2.run(0)
        servos.P0.run(max_fart)
        basic.pause(svingetid)
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
        servos.P0.stop()
        servos.P2.stop()
    elif mottatt == "Annet":
        servos.P2.run(-1 * max_fart)
        servos.P0.run(max_fart)
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
        basic.pause(2000)
        servos.P2.stop()
        servos.P0.stop()
    elif mottatt == "stopp":
        servos.P2.stop()
        servos.P0.stop()
        basic.show_icon(IconNames.HEART)
        basic.show_string("S")
    mottatt = "Stopp"

def on_received_string(receivedString):
    global mottatt2
    mottatt2 = receivedString
    basic.show_icon(IconNames.HEART)
    drive(mottatt2)
radio.on_received_string(on_received_string)

max_fart = 0
mottatt2 = ""
svingetid = 0
radio.set_group(1)
radio.set_transmit_power(7)
svingetid = 2000
mottatt2 = ""
max_fart = 20
basic.show_icon(IconNames.HAPPY)