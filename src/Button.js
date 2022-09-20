const Button = (props) => {
    const {placeholder} = props
    console.log(placeholder)
    return(
        <div className="button">
            {placeholder}
        </div>
    )
}

export default Button