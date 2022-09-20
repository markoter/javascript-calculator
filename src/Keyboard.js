import Button from "./Button"
const Keyboard = () => {

    const buttons = [...Array(20).keys()]
    return (
        <div id="keyboard">
            {
                buttons.map((button) => (
                    <Button
                    key={button}
                    placeholder={button}
                    />
                ))
            }

        </div>
    )
}

export default Keyboard