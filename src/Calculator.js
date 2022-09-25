import { useState } from "react"
import Keyboard from "./Keyboard"
import Screen from "./Screen"

const testPrinterSwitch = false
const testPrinter = (message) => {
    if (testPrinterSwitch) {
        console.log('hit place number: ' + message)
    }
}

const Calculator = () => {
    const [formula, changeFormula] = useState('')
    const [currentVal, changeCurrentVal] = useState('0')
    const [isCalculated, changeCalculatedState] = useState(false)

    const handleNumericButton = (buttonVal) => {
        let currentValTemp = '0'
        let formulaTemp = ''
        //start from beggining if calculated before
        if (!isCalculated) {
            currentValTemp = currentVal
            formulaTemp = formula

        }
        else {
            changeCalculatedState(false)
        }
        //create temp copies of state

        const isDecimalAlready = (currentValTemp.includes('.'))
        const isButtonDecimal = (buttonVal === '.')
        const isButtonZero = (buttonVal === '0')

        if (!isDecimalAlready) {
            testPrinter('1')
            if (!isButtonDecimal) {
                testPrinter('1-1')
                if (['+', '-', '*', '/'].includes(currentValTemp)) {
                    testPrinter('1-1-1')
                    changeCurrentVal(buttonVal)
                    changeFormula(formulaTemp.concat(buttonVal))

                }
                else if (currentValTemp === '0') {
                    testPrinter('1-1-2')
                    changeCurrentVal(buttonVal)
                    if (!isButtonZero) {
                        testPrinter('1-1-2-1')
                        changeFormula(formulaTemp.concat(buttonVal))
                    }
                }
                else {
                    testPrinter('1-1-3')
                    changeCurrentVal(currentValTemp.concat(buttonVal))
                    changeFormula(formulaTemp.concat(buttonVal))
                }
            }
            else { //not decimalAlready and button is Decimal
                testPrinter('1-2')
                if (['+', '-', '*', '/'].includes(currentValTemp)) {
                    testPrinter('1-2-1')
                    changeCurrentVal('0' + buttonVal)
                    changeFormula(formulaTemp.concat('0' + buttonVal))

                }
                else if (currentValTemp === '0') {
                    testPrinter('1-2-2')
                    changeCurrentVal('0' + buttonVal)
                    if (formulaTemp.charAt(formulaTemp.length - 1) === '0') {
                        testPrinter('1-2-2-1')
                        changeFormula(formulaTemp.concat(buttonVal))
                    }
                    else {
                        testPrinter('1-2-2-2')
                        changeFormula(formulaTemp.concat('0' + buttonVal))
                    }
                }
                else {
                    testPrinter('1-2-3')
                    changeCurrentVal(currentValTemp.concat(buttonVal))
                    changeFormula(formulaTemp.concat(buttonVal))
                }
            }

        }
        else {
            testPrinter('2')
            //decimal already
            if (!isButtonDecimal) {
                testPrinter('2-1')
                if (['+', '-', '*', '/'].includes(currentValTemp)) {
                    changeCurrentVal(buttonVal)
                    changeFormula(formulaTemp.concat(buttonVal))

                }
                else if (currentValTemp === '0') {
                    testPrinter('2-2')
                    changeCurrentVal(buttonVal)
                    changeFormula(formulaTemp.concat(buttonVal))
                }
                else {
                    testPrinter('2-3')
                    changeCurrentVal(currentValTemp.concat(buttonVal))
                    changeFormula(formulaTemp.concat(buttonVal))
                }
            }

        }
        console.log("tututu" + currentValTemp)
    }
    const handleOperatorButton = (buttonVal) => {
        // console.log(`hit oper butt with val: ${buttonVal}`)
        changeCurrentVal(buttonVal)

        if (!isCalculated) {
            if (buttonVal === '-') {
                changeFormula(formula.concat(buttonVal))
            }
            else {
                let formulaTemp = formula
                console.log("to jest formula temp: " + formulaTemp)
                formulaTemp = trimOperatorsFromEnd(formulaTemp)
                console.log(formulaTemp)
                changeFormula(formulaTemp.concat(buttonVal))
            }

        }
        else {
            changeFormula(currentVal + buttonVal)
            changeCalculatedState(false)
        }


    }
    const handleClearButton = () => {
        // console.log(`hit clear button`)
        changeCurrentVal('0')
        changeFormula('')
        changeCalculatedState(false)
    }
    const handleEquals = () => {
        let formulaTemp = formula.replace('--', '+')
        if (/[0-9]/.test(formulaTemp)) {
            const result = eval(trimOperatorsFromEnd(formulaTemp))
            changeCurrentVal(result.toString())
            changeFormula(formula.concat('=' + result))
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
            console.log(str)
            return str
        }
        else {
             return trimOperatorsFromEnd(str.slice(0, -1))
        }
    }

    return (
        <div id="calculator">
            <p id="calcName">Calculator Online JS</p>
            <div id="debugStateDisplayer">
                <p>currentVal is: {currentVal}</p>
                <p>formula is: {formula}</p>
                <p>isCalculated is: {isCalculated.toString()}</p>

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