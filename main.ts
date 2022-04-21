let my_serial = control.deviceSerialNumber()
radio.setGroup(69)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
let serials = []
let moznost = 1
let votes = 1
// HLASOVANI
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    votes = (votes + 1) % 4
    basic.showNumber(votes)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    radio.sendValue("vote", votes)
    music.playTone(Note.C, music.beat(100))
})
