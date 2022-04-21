my_serial = control.device_serial_number()
radio.set_group(69)
radio.set_transmit_power(7)
radio.set_transmit_serial_number(True)
serials = []
moznost = 1
votes = 1

#HLASOVANI
def on_button_pressed_a():
    global votes
    votes = (votes+1)%4
    basic.show_number(votes)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_event_pressed():
    radio.send_value("vote", votes)
    music.play_tone(Note.C, music.beat(100))
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)
