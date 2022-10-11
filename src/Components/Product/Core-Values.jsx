import style from './Core-Values.module.css'

import { useState } from 'react';

import Values from "../Cards/Values";

import image1 from '../../assests/Image(1).png'
import image2 from '../../assests/Image(2).png'
import image3 from '../../assests/Image(3).png'
import image4 from '../../assests/Image(4).png'

const CoreValue = () => {
    let [ourValues] = useState(
        [
        {
        parag: 'Marketing insights',
        heading: 'Data-driven client feedback',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.', 
        image: image1,
        position: "left"
        },
        {parag: 'Time tracker',
        heading: 'Track your project performance', 
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        image: image2,
        position: "right"
        },
        {
        parag: 'Lead Generation', 
        heading: 'More leads that convert', 
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.', 
        image: image3, 
        position: "left"
        },
        {
        parag: 'Remote teams', 
        heading: 'Real-time collaboration', 
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.', 
        image: image4, 
        position: "right"
        },
        
    ])
    return (
        <section className={style.coreValues}>

            {
                ourValues.map((item,index) => {
                    let {parag, heading, content, image, position} = item
                    
                    return <Values heading={heading} parag={parag} content={content} image={image}  key={index} position={position} />
                })
                
            }
            
        </section>
    );
}

export default CoreValue;