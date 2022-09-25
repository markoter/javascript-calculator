const Display = (props) => {
    const {currentVal} = props
    
    return(
        <div id="display">
           {currentVal}
        </div>
    )
}

export default Display