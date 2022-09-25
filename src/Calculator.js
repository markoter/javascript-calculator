import { useState } from "react"
import Keyboard from "./Keyboard"
import Screen from "./Screen"

const Calculator = () => {
    const [formula, changeFormula] = useState('')
    const [currentVal, changeCurrentVal] = useState('0')
    const [isCalculated, changeCalculatedState] = useState(false)

    const handleNumericButton = (buttonVal) => {
        //create local state copies
        let currentValTemp = '0'
        let formulaTemp = ''

        //start from beggining if something was already calculated
        if (!isCalculated) {
            currentValTemp = currentVal
            formulaTemp = formula

        }
        else {
            changeCalculatedState(false)
        }

        //create conditions to design behavior
        const isDecimalAlready = (currentValTemp.includes('.'))
        const isButtonDecimal = (buttonVal === '.')
        const isButtonZero = (buttonVal === '0')

        if (!isDecimalAlready) {
            if (!isButtonDecimal) {
                if (['+', '-', '*', '/'].includes(currentValTemp)) {
                    changeCurrentVal(buttonVal)
                    changeFormula(formulaTemp.concat(buttonVal))
                }
                else if (currentValTemp === '0') {
                    changeCurrentVal(buttonVal)
                    if (!isButtonZero) {
                        changeFormula(formulaTemp.concat(buttonVal))
                    }
                }
                else {
                    changeCurrentVal(currentValTemp.concat(buttonVal))
                    changeFormula(formulaTemp.concat(buttonVal))
                }
            }
            //not decimalAlready but button is decimal sign
            else {
                if (['+', '-', '*', '/'].includes(currentValTemp)) {
                    changeCurrentVal('0' + buttonVal)
                    changeFormula(formulaTemp.concat('0' + buttonVal))

                }
                else if (currentValTemp === '0') {
                    changeCurrentVal('0' + buttonVal)
                    if (formulaTemp.charAt(formulaTemp.length - 1) === '0') {
                        changeFormula(formulaTemp.concat(buttonVal))
                    }
                    else {
                        changeFormula(formulaTemp.concat('0' + buttonVal))
                    }
                }
                else {
                    changeCurrentVal(currentValTemp.concat(buttonVal))
                    changeFormula(formulaTemp.concat(buttonVal))
                }
            }
        }
        //decimal sign already exists
        else {
            if (!isButtonDecimal) {
                if (['+', '-', '*', '/'].includes(currentValTemp)) {
                    changeCurrentVal(buttonVal)
                    changeFormula(formulaTemp.concat(buttonVal))
                }
                else if (currentValTemp === '0') {
                    changeCurrentVal(buttonVal)
                    changeFormula(formulaTemp.concat(buttonVal))
                }
                else {
                    changeCurrentVal(currentValTemp.concat(buttonVal))
                    changeFormula(formulaTemp.concat(buttonVal))
                }
            }
        }
    }

    const handleOperatorButton = (buttonVal) => {
        changeCurrentVal(buttonVal)

        if (!isCalculated) {
            if (buttonVal === '-') {
                changeFormula(formula.concat(buttonVal))
            }
            else {
                let formulaTemp = formula
                formulaTemp = trimOperatorsFromEnd(formulaTemp)
                changeFormula(formulaTemp.concat(buttonVal))
            }
        }
        else {
            changeFormula(currentVal + buttonVal)
            changeCalculatedState(false)
        }
    }

    const handleClearButton = () => {
        changeCurrentVal('0')
        changeFormula('')
        changeCalculatedState(false)
    }

    const handleEquals = () => {
        //change -- to + for eval not to treat this is a decrement sign
        let formulaTemp = formula.replace('--', '+')
        //check if there is some numbers to calculate actually
        if (/[0-9]/.test(formulaTemp)) {
            formulaTemp = trimOperatorsFromEnd(formulaTemp)
            const result = eval(trimOperatorsFromEnd(formulaTemp))
            changeCurrentVal(result.toString())
            changeFormula(formulaTemp.concat('=' + result))
            changeCalculatedState(true)
        }
        else {
            changeCurrentVal("NaN")
            changeFormula('')
        }

    }

    const trimOperatorsFromEnd = (str) => {
        const endsWithOperator = ['+', '-', '*', '/'].includes(str.slice(-1))
        if (!endsWithOperator) {
            return str
        }
        else {
            return trimOperatorsFromEnd(str.slice(0, -1))
        }
    }

    //change style
    const changeTheme = () => {
        const calc = document.getElementById("body")
        calc.classList.toggle("old-school")
    }

    return (
        <div id="calculator">
            <div id="calc-header">
                <p id="calc-name">JavaScript Calculator</p>
                <button
                    id="theme-btn"
                    onClick={() => changeTheme()}>
                    <span className="material-symbols-outlined">
                        star_half
                    </span>
                </button>
            </div>
            <Screen formula={formula} currentVal={currentVal} />
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