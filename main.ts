function drive (mottatt: string) {
    if (mottatt == "Pil V") {
        servos.P1.run(-1 * max_fart)
        servos.P0.run(0)
        basic.pause(svingetid)
        servos.P1.run(0)
        servos.P0.run(0)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (mottatt == "Pil H") {
        servos.P1.run(0)
        servos.P0.run(max_fart)
        basic.pause(svingetid)
        servos.P1.run(0)
        servos.P0.run(0)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (mottatt == "Annet") {
        servos.P1.run(-1 * max_fart)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        servos.P0.run(max_fart)
    } else if (mottatt == "stopp") {
        servos.P1.stop()
        servos.P0.stop()
        basic.showString("S")
    }
}
radio.onReceivedString(function (receivedString) {
    mottatt = receivedString
    drive(mottatt)
})
let max_fart = 0
let mottatt = ""
let svingetid = 0
radio.setGroup(1)
svingetid = 2000
mottatt = ""
max_fart = 20
