import { useState } from "react"
import Keyboard from "./Keyboard"
import Screen from "./Screen"

const testPrinterSwitch = true
const testPrinter = (message) => {
    if (testPrinterSwitch) {
        console.log('hit place number: ' + message)
    }
}

const Calculator = () => {
    const [formula, changeFormula] = useState('')
    const [currentVal, changeCurrentVal] = useState('0')
    const [prevVal, changePrevVal] = useState('')

    const handleNumericButton = (buttonVal) => {
        const isDecimalAlready = (currentVal.includes('.'))
        const isButtonDecimal = (buttonVal === '.')
        const isButtonZero = (buttonVal === '0')
        if (!isDecimalAlready) {
            testPrinter('1')
            if (!isButtonDecimal) {
                testPrinter('1-1')
                if (['+', '-', '*', '/'].includes(currentVal)) {
                    testPrinter('1-1-1')
                    changeCurrentVal(buttonVal)
                    changeFormula(formula.concat(buttonVal))

                }
                else if (currentVal === '0') {
                    testPrinter('1-1-2')
                    changeCurrentVal(buttonVal)
                    if (!isButtonZero) {
                        testPrinter('1-1-2-1')
                        changeFormula(formula.concat(buttonVal))
                    }
                }
                else {
                    testPrinter('1-1-3')
                    changeCurrentVal(currentVal.concat(buttonVal))
                    changeFormula(formula.concat(buttonVal))
                }
            }
            else { //not decimalAlready and button is Decimal
                testPrinter('1-2')
                if (['+', '-', '*', '/'].includes(currentVal)) {
                    testPrinter('1-2-1')
                    changeCurrentVal('0' + buttonVal)
                    changeFormula(formula.concat('0' + buttonVal))

                }
                else if (currentVal === '0') {
                    testPrinter('1-2-2')
                    changeCurrentVal('0' + buttonVal)
                    if (formula.charAt(formula.length - 1) === '0') {
                        testPrinter('1-2-2-1')
                        changeFormula(formula.concat(buttonVal))
                    }
                    else {
                        testPrinter('1-2-2-2')
                        changeFormula(formula.concat('0' + buttonVal))
                    }
                }
                else {
                    testPrinter('1-2-3')
                    changeCurrentVal(currentVal.concat(buttonVal))
                    changeFormula(formula.concat(buttonVal))
                }
            }

        }
        else {
            testPrinter('2')
            //decimal already
            if (!isButtonDecimal) {
                testPrinter('2-1')
                if (['+', '-', '*', '/'].includes(currentVal)) {
                    changeCurrentVal(buttonVal)
                    changeFormula(formula.concat(buttonVal))

                }
                else if (currentVal === '0') {
                    testPrinter('2-2')
                    changeCurrentVal(buttonVal)
                    changeFormula(formula.concat(buttonVal))
                }
                else {
                    testPrinter('2-3')
                    changeCurrentVal(currentVal.concat(buttonVal))
                    changeFormula(formula.concat(buttonVal))
                }
            }

        }
        console.log("tututu" + currentVal)
    }
    const handleOperatorButton = (buttonVal) => {
        // console.log(`hit oper butt with val: ${buttonVal}`)
        changeCurrentVal(buttonVal)

        if (prevVal === '') {
            changeFormula(formula.concat(buttonVal))

        }
        else {
            changeFormula(prevVal + buttonVal)
            changePrevVal('')
        }


    }
    const handleClearButton = () => {
        // console.log(`hit clear button`)
        changeCurrentVal('0')
        changeFormula('')
        changePrevVal('')
    }
    const handleEquals = () => {
        // console.log(`hit equals`)
        const result = eval(formula)
        changeCurrentVal(result.toString())
        changePrevVal(result.toString())
        changeFormula(formula.concat('=' + result))
    }
    return (
        <div id="calculator">
            <p id="calcName">Calculator Online JS</p>
            <div id="debugStateDisplayer">
                <p>currentVal is: {currentVal}</p>
                <p>prevVal is: {prevVal}</p>
                <p>formula is: {formula}</p>

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