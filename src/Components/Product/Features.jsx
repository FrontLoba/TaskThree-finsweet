import { useState } from "react";

import fStyle from './Features.module.css'

import Cards from "../Cards/Cards";

import icon7 from '../../assests/Icon(7).svg'
import icon8 from '../../assests/Icon(8).svg'
import icon9 from '../../assests/Icon(9).svg'



const Features = () => {
    let [feature] = useState (
        [
            {
                heading: "Advance 256-bit encryption",
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
                image: icon7,
                id: 1
            },
            {
                heading: "Simple collaboration tools",
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
                image: icon8,
                id: 2
            },
            {
                heading: "Customizable AI features",
                content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
                image: icon9,
                id: 3
            },
        ]
    )
    return (
        <section className={fStyle.feature} >
            <h2>Features</h2>
            <div className={fStyle.cards}>
            {
                feature.map((item, index) => {
                    let {heading, content, image, id} = item;
                    return <Cards heading={heading} content={content} image={image} key={id} />
                })
            }
            </div>

        </section>
    );
}

export default Features;