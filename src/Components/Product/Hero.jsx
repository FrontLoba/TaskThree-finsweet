import './Hero.css'
import style from '../logoComp/logo.module.css'
import Button from '../Button/Button'
import { useState } from 'react'
import './Hero.css'

import Logo from '../logoComp/logo'

import heroIMG from '../../assests/Image01.png'
import logoOne from '../../assests/Logo-01.png'
import logoTwo from '../../assests/Logo-02.png'
import logoThree from '../../assests/Logo-03.png'
import logoFour from '../../assests/Logo-04.png'
import logoFive from '../../assests/Logo-05.png'


let images= [
    {image: logoOne, name: 'logopesium'},
    {image: logoTwo, name: 'logopesium'},
    {image: logoThree, name: 'logopesium'},
    {image: logoFour, name: 'logopesium'},
    {image: logoFive, name: 'logopesium'},
    
]


const Hero =() =>{
    let [btn2] = useState (
        [
            {val: 'Get Started', bgcolor: 'btn1', id: 1},
            {val: 'Contact Us', bgcolor: 'btn2', id:2},
        ]
        
    )
    return (
        <div>
            <div className='hero-sect'>
                <div className='hero-word'>
                    <h1>Grow your Sales and Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                        {
                            btn2.map((item, index) => {
                                let {val, bgcolor, id} = item;
                                return <Button tagValue={val} color={bgcolor} key={id} />
                            })
                        }
                    
                </div>
                <div>
                    <img className='heroIMG' src={heroIMG} alt='banner'/>
                </div>

            </div>
            <div className={style.logo}>
                {
                    images.map(
                    (item, index) => {
                        let {image, name} = item;
                        return <Logo image={image} name={name} key={index} />
                    }
                    )
                }

            </div>
        </div>
    )
};

export default Hero;