import { useState } from 'react';
import Button from '../Button/Button';
import './NavBar.css'
import '../Button/Button.css'


const NavBar = () => {
    let [btn1] = useState (
        'Free Trial'
    )
    return (
        <div className='Nav-bar'>
            <div className="logo">
            finSweet
               <span className='open-icon hide'>&#9776;</span>
                <span className='close-iconn hide'>&times;</span>
                
            </div>

            <div className="nav">
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li className='m-hide'>Free Trial</li>
                </ul>
                
            </div>

            <Button tagValue={btn1}/>
        </div>
    );
}

export default NavBar;