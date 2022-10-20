import NavBar from "../Product/NavBar"

import contactStyle from './Contact.module.css'

import cIcon1 from '../../assests/cIcon(1).png'
import cIcon2 from '../../assests/cIcon(2).png'
import cIcon3 from '../../assests/cIcon(3).png'
import NearFooter from "../Product/NearFooter"
import Footer from "../Product/Footer"

import { useState, useEffect} from "react"




const Contact = () => {
    const initialValues = 
    { fullName: "", companyName: "", email: "", subject: "", message: ""};
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors]= useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues( {...values, [name]: value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(formValidate(values))
        setIsSubmit(true)
        setValues(initialValues)
        
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(values)
        }
    }, [formErrors]);

    const formValidate = (formValues) => {
        const errors = {};
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!formValues.fullName) {
            errors.fullName = "Full name is required!"
        } 
        if(!formValues.companyName) {
            errors.companyName = "Company name is required!"
        } else if(formValues.companyName.length < 5) {
            errors.companyName= "names must be more than 5 characters"
        }
        if(!formValues.email) {
            errors.email = "Work email is required!"
        } 
        // else if (regex.test(formValues.email)) {
        //     errors.email = "This is not valid email address"
        // }
        
        if(!formValues.subject) {
            errors.subject = "Give your message a title!"
        }
        if(!formValues.message) {
            errors.message = "Express yourself in detail in the box!"
        }
        return errors
    };



    return (
        <div>
            <NavBar/> 
            <h1 className={contactStyle.thead}>Get in touch with us</h1>
            <div className={contactStyle.container}>
                <h2>Drop us a message</h2>
                <p>We will get to you as soon as possibe</p>
                <div className={contactStyle.content}>

                    <form className={contactStyle.mainCon} onSubmit={handleSubmit} action="https://formbold.com/s/" method="POST">
                        <div className={contactStyle.wrapInput}>
                            <div>
                                <input type='text' name="fullName" value={values.fullName} onChange={handleChange} placeholder='Full name' />
                                <small>{formErrors.fullName}</small>
                            </div>
                            

                            <div>
                                <input type='text' name="companyName" value={values.companyName} onChange={handleChange} placeholder='Company name' />
                                <small>{formErrors.companyName}</small>
                            </div>
                        </div>
            
                        <div>
                        <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Work Email"  />
                        <small>{formErrors.email}</small>
                        </div>
        
                        <div>
                        <input type="text" name="subject" value={values.subject} onChange={handleChange} placeholder="Subject" />
                        <small>{formErrors.subject}</small>
                        </div>
        
                        <div>
                        <textarea rows="5" col="5" name="message" value={values.message} onChange={handleChange} placeholder='Message'></textarea>
                        <small>{formErrors.message}</small>
                        </div>
                        <div>
                            {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
                        </div>
                        
                        <div className={contactStyle.submit}>
                        <input type="submit" value='Submit'  id={contactStyle.submit}/>
                        </div>
                        <div>
                            {
                                Object.keys(formErrors).length === 0 && isSubmit ?  'Message sent successfully' : null
                            }
                        </div>

                    </form>

                    <div className={contactStyle.mainCon2}>
                        <div className={contactStyle.wraps}>
                            <div>
                                <img src={cIcon1} alt='' />
                            </div>
                            <div>
                                <h3>+ 1800 145 276</h3>
                                <p>Free Support</p>
                            </div>
                        </div>
                        <div className={contactStyle.wraps}>
                            <div>
                                <img src={cIcon2} alt='' />
                            </div>
                            <div>
                                <h3>finsweet@gmail.com</h3>
                                <p>Help Email support</p>
                            </div>
                        </div>
                        <div className={contactStyle.wraps}>
                            <div>
                                <img src={cIcon3} alt='' />
                            </div>
                            <div>
                                <h3>sales@finsweet.com</h3>
                                <p>Sales Enquiry</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
            
            </div>
            <NearFooter/>
            <Footer/>
        
        </div>
        
    )
}

export default Contact;