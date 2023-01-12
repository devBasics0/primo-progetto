basic.showIcon(IconNames.Yes)
basic.pause(1000)
let luminosità = 256
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    luminosità
    )
    if (input.buttonIsPressed(Button.AB)) {
        luminosità = 256
    } else {
        if (input.buttonIsPressed(Button.A)) {
            luminosità = luminosità + 20
            basic.showArrow(ArrowNames.South)
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.B)) {
            luminosità = luminosità - 20
            basic.showArrow(ArrowNames.North)
            basic.pause(100)
        }
    }
})
