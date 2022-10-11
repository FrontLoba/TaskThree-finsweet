import './Button.css'


const Button = ({tagValue, color}) => {
    return (
        <button className={color}>{tagValue}</button>
    )
}

export default Button;