import { useState } from "react"
import Keyboard from "./Keyboard"
import Screen from "./Screen"

const Calculator = () => {
    const [formula, changeFormula] = useState('')
    const [currentVal, changeCurrentVal] = useState('0')
    return(
        <div id="calculator">
            This is Calculator
            <Screen formula={formula} currentVal={currentVal}/>
            <Keyboard />
        </div>
    )
}

export default Calculator