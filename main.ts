radio.onReceivedNumber(function (receivedNumber) {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(20)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        radio.sendString("test")
        basic.showString("test")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (receivedString))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
radio.setGroup(77)
music.setVolume(127)
