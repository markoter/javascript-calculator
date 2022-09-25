import Formula from "./Formula"
import Display from "./Display"

const Screen = (props) => {
    const {formula, currentVal} = props
    
    return(
        <div id="screen">
            <Formula formula={formula}/>
            <Display currentVal={currentVal}/>
        </div>
    )
}

export default Screen