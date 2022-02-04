input.onButtonPressed(Button.A, function () {
    radio.sendString(" este mensaje se enviara en un segundo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
