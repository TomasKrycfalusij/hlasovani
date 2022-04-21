let remote_serial = radio.receivedPacket(RadioPacketProperty.SerialNumber)
let my_serial = control.deviceSerialNumber()
console.log(my_serial)
radio.setGroup(69)
let serials = []
let moznost = 1
// NASTAVENI MOZNOSTI HLASOVANI NA TRUE/FALSE
let hlasovani = true
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
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    radio.sendValue("vote", moznost)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    moznost -= 1
    if (moznost == 0) {
        moznost = 4
    }
    
    zobrazeni_hlasu()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    moznost += 1
    if (moznost == 5) {
        moznost = 1
    }
    
    zobrazeni_hlasu()
})
function zobrazeni_hlasu() {
    if (moznost == 1) {
        basic.showString("A")
    }
    
    if (moznost == 2) {
        basic.showString("B")
    }
    
    if (moznost == 3) {
        basic.showString("C")
    }
    
    if (moznost == 4) {
        basic.showString("D")
    }
    
}

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
    
})
