import { useState } from "react"
import Keyboard from "./Keyboard"
import Screen from "./Screen"

const Calculator = () => {
    const [formula, changeFormula] = useState('')
    const [currentVal, changeCurrentVal] = useState('3')

    const handleNumericButton = () => {
        changeCurrentVal()
    }
    const handleClearButton = () => {
        changeCurrentVal('0')
    }
    return(
        <div id="calculator">
            <p id="calcName">Calculator Online JS</p>
            <Screen formula={formula} currentVal={currentVal}/>
            <Keyboard handleClearButton={handleClearButton}/>
        </div>
    )
}

export default Calculator