let remote_serial = radio.receivedPacket(RadioPacketProperty.SerialNumber)
let my_serial = control.deviceSerialNumber()
console.log(my_serial)
let hlasovani = true
// NASTAVENI MOZNOSTI HLASOVANI NA TRUE/FALSE
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (hlasovani == true) {
        hlasovani = false
        console.log(hlasovani)
    } else {
        hlasovani = true
        console.log(hlasovani)
    }
    
})
// HLASOVANI
// HLAS PRO A
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    if (hlasovani == true) {
        radio.sendNumber(1)
    }
    
})
// HLAS PRO B
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    if (hlasovani == true) {
        radio.sendNumber(2)
    }
    
})
// HLAS PRO C
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    if (hlasovani == true) {
        radio.sendNumber(3)
    }
    
})
// HLAS PRO D
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (hlasovani == true) {
        radio.sendNumber(4)
    }
    
})
let votes = [0, 0, 0, 0]
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (receivedNumber == 1) {
        votes[0] += 1
    } else if (receivedNumber == 2) {
        votes[1] += 1
    } else if (receivedNumber == 3) {
        votes[2] += 1
    } else if (receivedNumber == 4) {
        votes[3] += 1
    }
    
    console.log("Hlasy v poměru A, B, C, D")
    console.log(votes)
})
