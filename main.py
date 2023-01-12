basic.show_icon(IconNames.YES)
basic.pause(1000)
luminosità = 256

def on_forever():
    global luminosità
    led.plot_bar_graph(input.light_level(), luminosità)
    if input.button_is_pressed(Button.A):
        luminosità = luminosità + 20
        basic.show_arrow(ArrowNames.SOUTH)
        basic.pause(100)
    if input.button_is_pressed(Button.B):
        luminosità = luminosità - 20
        basic.show_arrow(ArrowNames.NORTH)
        basic.pause(100)
basic.forever(on_forever)
