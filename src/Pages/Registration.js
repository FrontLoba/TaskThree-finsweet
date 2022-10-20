import { useState } from "react";
import FormInput from "../Components/Forms/Compo/FormInput";



function Registration () {
    const [values, setValues] = useState (
        {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',

        }
    )
    const input = [
        {
            id: 1,
            type: 'text',
            name: 'username',
            placeholder: 'Username',
            errorMessage: 'Provide username with at least 1 special character and 1 number',
            requred: true,
            pattern: "^[A-Za-z][A-Za-z0-9_]{3,15}$",
        },
        {
            id: 2,
            type: 'email',
            name: 'email',
            placeholder: 'Email Address',
            errorMessage: 'Enter a valid email address',
            requred: true,
            pattern: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}]~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
        },
        {
            id: 3,
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            errorMessage: 'Provide password with special character and number',
            requred: true,
            pattern: "/^[A-Za-z][A-Za-z0-9_]{7,30}$/",
        },
        {
            id: 4,
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'Confirm Password',
            errorMessage: 'Password does not match. Ensure confirm password is same as passowrd',
            requred: true,
            pattern: values.password,
        },
        // {
        //     id: 4,
        //     type: 'text',
        //     name: 'username',
        //     placeholder: 'Username',
        // },
    ]
    // const usernameRef = useRef()
    // console.log(usernameRef)
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const data = new FormData(e.target)
    //     console.log(data)
    //     console.log(Object.fromEntries(data.entries())
    // }
    // const [focus, setFocus] = useState(false)
    
    // const handleFocuss = () => {
    //     setFocus(true)
    // }
    // useState hooks can still be use.
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',

        } 
        )
        
    }
    const handleChange = (e) => {

        setValues({...values, [e.target.name]: e.target.value})

        console.log(values)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <FormInput placeholder='Username' setUsername={setUsername} /> */}
                {/* <FormInput name='username' placeholder='Username' prefer={usernameRef} /> */}
                
                {
                input.map((input) => {

                    return <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
                }
                )
                }
                    
                {/* <FormInput name='email' placeholder='Email'/>
                <FormInput name='password' placeholder='Password' /> */}
                <button>Send</button>
             </form>
        </div>

    )
}


export default Registration;