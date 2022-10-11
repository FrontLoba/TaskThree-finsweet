import { useState } from 'react';
import Button from '../Button/Button';

import priceStyle from '../Pricing/PriceHero.module.css'



const PriceHero = () => {
    let [btn2] = useState (
        [
            {val: 'Monthly', bgcolor: priceStyle.pHerobtn1, id: 1},
            {val: 'Yearly', bgcolor: priceStyle.pHerobtn2, id:2},
        ]
        
    )
    return (
        <section className={priceStyle.pHero}>
            <h1>Pricing plans that suit you</h1>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
            </p>
            <div className={priceStyle.pHeroBtn} >
            {
                btn2.map((item, index) => {
                    let {val, bgcolor, id} = item;
                    return <Button tagValue={val} color={bgcolor} key={id} />
                })
            }

            </div>
        </section>
    )
}

export default PriceHero;