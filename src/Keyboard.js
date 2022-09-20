import Button from "./Button"
import buttons from "./buttonsList"
const Keyboard = () => {

    
    return (
        <div id="keyboard">
            {
                buttons.map((button) => (
                    <Button
                    key={button.id}
                    id={button.id}
                    value={button.value}
                    className={button.className}
                    />
                ))
            }

        </div>
    )
}

export default Keyboard