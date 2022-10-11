import nearStyle from './NearFooter.module.css'
import { useState } from 'react';
import Button from '../Button/Button';
import '../Button/Button.css'

const NearFooter = () => {
    let [btn3] = useState (
        'View Pricing'
    )
    return (
        <section className={nearStyle.nearFooter}>
            <h2>Are you ready to grow your business with us?</h2>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
            </p>
            <Button tagValue={btn3}/>
        </section>
    )
}

export default NearFooter;