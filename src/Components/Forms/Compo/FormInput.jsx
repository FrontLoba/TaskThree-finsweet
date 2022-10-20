import formStyle from './FormInput.module.css'
import { useState } from 'react'



const FormInput = (props) => {
    let {id, onChange, errorMessage, ...inputProps} = props
    
    const [focus, setFocus] = useState(false)
    
    const handleFocus = (e) => {
        setFocus(true);
    }
    return (
        <div className={formStyle.formInput}>
            {/* <label htmlFor="">Username</label> */}
            {/* <input placeholder={props.placeholder} onChange={e => props.setUsername(e.target.value)} /> */}
            <input 
            {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocus} 
            focus={focus.toString()} />
            <span className={formStyle.errMess}>{errorMessage}</span>

        </div>
    )
}


export default FormInput;