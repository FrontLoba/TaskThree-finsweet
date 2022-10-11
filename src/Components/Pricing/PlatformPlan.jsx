import PlansCard from "../Cards/PlansCard";

import platStyles from './PlatformPlan.module.css'

import { useState } from "react";

import pIcon1 from '../../assests/pIcon1.svg'
import pIcon2 from '../../assests/pIcon2.svg'
import pIcon3 from '../../assests/pIcon3.svg'
// import liMark from '../assests/li-mark.svg'



const PlatformPlan = () => {
    const  [plans] = useState ([
        {
            image: pIcon1,
            heading:'Regular',
            para1: 'Starter Plan',
            list: ['Limited Project', 'Regular Support Business', '1 month Free Trial', '3GB storage', 'Ads Preview'],
            para2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
            para3: 'For limited period',
            heading2: 'Free',
            color: 1
        },
        {
            image: pIcon2,
            heading:'Plantinum',
            para1: 'For the best results',
            list: ['Limited Project', 'Regular Support Business', '1 month Free Trial', '20GB storage', 'Ads Preview'],
            para2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
            para3: 'For limited period',
            heading2: '$342',
            color: 0
                      
        },
        {
        
            image: pIcon3,
            heading:'Standard',
            para1: 'Most Popular',
            list: ['Limited Project', 'Regular Support Business', '1 month Free Trial', '30GB storage', 'Ads Preview'],
            para2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
            para3: 'Billing Monthly',
            heading2: '$234',
            color: 1
                     
        },
    ]
    )
    return (
        <div className={platStyles.pContainer}>
            {
                plans.map((item, index) => {
                    let {image, heading, heading2, para1, para2, para3, list} = item
                   return <PlansCard icon={image} pHead={heading} pHead2={heading2} para1={para1} para2={para2} para3={para3} list={list} key={index} />
                })

            }
        </div>
    );
}
export default PlatformPlan;