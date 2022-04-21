remote_serial = radio.received_packet(RadioPacketProperty.SERIAL_NUMBER)
my_serial = control.device_serial_number()
print(my_serial)

hlasovani = True
#NASTAVENI MOZNOSTI HLASOVANI NA TRUE/FALSE
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

#HLAS PRO A
def on_pin_pressed_p0():
    if hlasovani == True:
        radio.send_number(1)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

#HLAS PRO B
def on_pin_pressed_p1():
    if hlasovani == True:
        radio.send_number(2)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

#HLAS PRO C
def on_pin_pressed_p2():
    if hlasovani == True:
        radio.send_number(3)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

#HLAS PRO D
def on_button_pressed_a():
    if hlasovani == True:
            radio.send_number(4)
input.on_button_pressed(Button.A, on_button_pressed_a)



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
    print("Hlasy v poměru A, B, C, D")
    print(votes)
radio.on_received_number(on_received_number)