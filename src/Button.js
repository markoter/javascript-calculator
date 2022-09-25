const Button = (props) => {
    const { id, value, className, handleButtonClick} = props
    
    return(
        <div 
        id={id} 
        className={className} 
        onClick={() => handleButtonClick(className, value)}
        >
            {value}
        </div>
    )
}

export default Button