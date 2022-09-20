const Button = (props) => {
    const { id, value, className} = props
    return(
        <div id={id} className={className}>
            {value}
        </div>
    )
}

export default Button