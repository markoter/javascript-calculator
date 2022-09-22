import { useState } from "react"
import Keyboard from "./Keyboard"
import Screen from "./Screen"

const Calculator = () => {
    const [formula, changeFormula] = useState('')
    const [currentVal, changeCurrentVal] = useState('3')

    const handleNumericButton = (buttonVal) => {
        console.log(`hit num butt with val: ${buttonVal}`)
        //changeCurrentVal()
    }
    const handleOperatorButton = (buttonVal) => {
        console.log(`hit oper butt with val: ${buttonVal}`)
        //changeCurrentVal()
    }
    const handleClearButton = () => {
        console.log(`hit clear button`)
        //changeCurrentVal('0')
    }
    const handleEquals = () => {
        console.log(`hit equals`)
    }
    return(
        <div id="calculator">
            <p id="calcName">Calculator Online JS</p>
            <Screen formula={formula} currentVal={currentVal}/>
            <Keyboard 
            handleClearButton={handleClearButton}
            handleNumericButton={handleNumericButton}
            handleOperatorButton={handleOperatorButton}
            handleEquals={handleEquals}
            />
        </div>
    )
}

export default Calculator