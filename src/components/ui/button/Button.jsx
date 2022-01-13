import './Button.css'

function Button(props){
    const classes = "btn_wrapper " + props.className
    return (
        <button className={classes}>{props.children}</button>
    )
}

export default Button