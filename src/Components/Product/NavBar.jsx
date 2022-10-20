import { useState } from 'react';
import Button from '../Button/Button';
import './NavBar.css'
import '../Button/Button.css'
import {Link} from 'react-router-dom'


const NavBar = () => {
    let [btn1] = useState (
        'Free Trial'
    )
    let [toggle, setToggle] = useState(true)
    const HandleClick = () => {
        setToggle(toggle => !toggle)
    }
    return (
        <div className='Nav-bar'>
            <div className="logo">
                <div>
                finSweet
                </div>
                <div onClick={HandleClick}>
                {toggle ?
                    <span className='open-icon hide'>&#9776;</span> :
                     <span className='close-icon hide'>&times;</span>

                }
                </div>
                
            </div>

            <div>
                <ul className={!toggle ? "nav-list open-list" : "nav-list"}>
                
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Product</Link></li>
                    <li><Link to='/Pricing'>Pricing</Link></li>
                    <li><Link to='/'>About Us</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li className='m-hide'>Free Trial</li>
                </ul>
                
            </div>

            <Button tagValue={btn1}/>
        </div>
    );
}

export default NavBar;