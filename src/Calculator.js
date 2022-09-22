import { useState } from "react"
import Keyboard from "./Keyboard"
import Screen from "./Screen"

const Calculator = () => {
    const [formula, changeFormula] = useState('')
    const [currentVal, changeCurrentVal] = useState('0')

    const handleNumericButton = (buttonVal) => {
        // console.log(`hit num butt with val: ${buttonVal}`)
        if (currentVal == 0) {
            changeCurrentVal(buttonVal)
        }
        else {
            changeCurrentVal(currentVal.concat(buttonVal))
        }
        changeFormula(formula.concat(buttonVal))
    }
    const handleOperatorButton = (buttonVal) => {
        // console.log(`hit oper butt with val: ${buttonVal}`)
        changeCurrentVal(buttonVal)
        changeFormula(formula.concat(buttonVal))
    }
    const handleClearButton = () => {
        // console.log(`hit clear button`)
        changeCurrentVal('0')
        changeFormula('')
    }
    const handleEquals = () => {
        // console.log(`hit equals`)
        const result = eval(formula)
        changeCurrentVal(result)
        // changeFormula(formula.concat('=' + result))
        // console.log(result)
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