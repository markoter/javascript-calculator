const Button = (props) => {
    const { id, value, className, onClick} = props
    return(
        <div id={id} className={className} onClick={onClick}>
            {value}
        </div>
    )
}

export default Button