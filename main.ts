input.onButtonPressed(Button.A, function () {
    mottatt = "Annet"
})
function drive (mottatt: string) {
    if (mottatt == "Pil V") {
        servos.P2.run(-1 * max_fart)
        servos.P0.run(0)
        basic.pause(svingetid)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        servos.P0.stop()
        servos.P2.stop()
    } else if (mottatt == "Pil H") {
        servos.P2.run(0)
        servos.P0.run(max_fart)
        basic.pause(svingetid)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        servos.P0.stop()
        servos.P2.stop()
    } else if (mottatt == "Annet") {
        servos.P2.run(-1 * max_fart)
        servos.P0.run(max_fart)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        servos.P2.stop()
        servos.P0.stop()
    } else if (mottatt == "stopp") {
        servos.P2.stop()
        servos.P0.stop()
        basic.showIcon(IconNames.Heart)
        basic.showString("S")
    }
    mottatt = "Stopp"
}
radio.onReceivedString(function (receivedString) {
    mottatt = receivedString
    basic.showIcon(IconNames.Heart)
    drive(mottatt)
})
let mottatt = ""
let max_fart = 0
let svingetid = 0
radio.setGroup(69)
radio.setTransmitPower(7)
svingetid = 2000
let mottatt2 = ""
max_fart = 20
basic.showIcon(IconNames.Heart)
