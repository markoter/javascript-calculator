import Button from "./Button"
import buttons from "./buttonsList"
const Keyboard = (props) => {
    const { handleClearButton, handleNumericButton, handleOperatorButton, handleEquals, handleDecimal } = props

    const handleButtonClick = (className, value) => {
        //console.log(`clicked button with class: ${className} value: ${value}`)
        if (className.includes("number")) {
            handleNumericButton(value)
        }
        else if (className.includes("operator")) {
            handleOperatorButton(value)
        }
        else if (value === 'clear') {
            handleClearButton()
        }
        else {
            handleEquals()
        }
    }


    return (
        <div id="keyboard">
            {
                buttons.map((button) => (
                    <Button
                        key={button.id}
                        id={button.id}
                        value={button.value}
                        className={button.className}
                        handleButtonClick={handleButtonClick}
                    />
                ))
            }

        </div>
    )
}

export default Keyboard