remote_serial = radio.received_packet(RadioPacketProperty.SERIAL_NUMBER)
my_serial = control.device_serial_number()
print(my_serial)
radio.set_group(69)
serials = []
moznost = 1
#NASTAVENI MOZNOSTI HLASOVANI NA TRUE/FALSE
hlasovani = True
def on_button_pressed_ab():
    global hlasovani
    if hlasovani == True:
        hlasovani = False
        print(hlasovani)
    else:
        hlasovani = True
        print(hlasovani)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

#HLASOVANI
def on_logo_event_pressed():
    radio.send_value("vote", moznost)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)


def on_button_pressed_a():
    global moznost
    moznost -= 1
    if moznost == 0:
        moznost = 4
    zobrazeni_hlasu()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global moznost
    moznost += 1
    if moznost == 5:
        moznost = 1
    zobrazeni_hlasu()
input.on_button_pressed(Button.B, on_button_pressed_b)

def zobrazeni_hlasu():
    if moznost == 1:
        basic.show_string("A")
    if moznost == 2:
        basic.show_string("B")
    if moznost == 3:
        basic.show_string("C")
    if moznost == 4:
        basic.show_string("D")


votes = [0, 0, 0, 0]
def on_received_number(receivedNumber):
    global votes
    if receivedNumber == 1:
        votes[0] += 1
    elif receivedNumber == 2:
        votes[1] += 1
    elif receivedNumber == 3:
        votes[2] += 1
    elif receivedNumber == 4:
        votes[3] += 1
radio.on_received_number(on_received_number)