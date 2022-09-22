import Button from "./Button"
import buttons from "./buttonsList"
const Keyboard = (props) => {
    const {handleClearButton} = props

    
    return (
        <div id="keyboard">
            {
                buttons.map((button) => (
                    <Button
                    key={button.id}
                    id={button.id}
                    value={button.value}
                    className={button.className}
                    onClick={button.onClick}
                    />
                ))
            }

        </div>
    )
}

export default Keyboard