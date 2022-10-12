import NavBar from "../Product/NavBar"

import contactStyle from './Contact.module.css'

import cIcon1 from '../../assests/cIcon(1).png'
import cIcon2 from '../../assests/cIcon(2).png'
import cIcon3 from '../../assests/cIcon(3).png'
import NearFooter from "../Product/NearFooter"
import Footer from "../Product/Footer"




const Contact = () => {
    return (
        <div>
            <NavBar/> 
            <h1 className={contactStyle.thead}>Get in with us</h1>
            <div className={contactStyle.container}>
                <h2>Drop us a message</h2>
                <p>We will get to you as soon as possibe</p>
                <div className={contactStyle.content}>

                    <div className={contactStyle.mainCon}>
                        <div className={contactStyle.wrapInput}>
                            <div>
                                <input type='text' value='' placeholder='Full name' />
                            </div>

                            <div>
                                <input type='text' value='' placeholder='Company name' />
                            </div>
                        </div>
            
                        <div>
                        <input type="email" value='' placeholder="work email"  />
                        </div>
        
                        <div>
                        <input type="text" value='' placeholder="Subject"  />
                        </div>
        
                        <div>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        </div>
                        
                        <div className={contactStyle.submit}>
                        <input type="submit" value='Submit'  id={contactStyle.submit}/>
                        </div>

                    </div>
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