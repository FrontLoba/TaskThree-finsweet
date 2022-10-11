import Button from "../Button/Button";
import { useState } from "react";

import "./PlansCard.css";




const PlansCard = (props) => {
    let {icon, pHead, pHead2, para1, para2, para3, list} = props
    

    let [btn] = useState (
        'Get started'
    )
    return (
        <div className='platform'>
            <div className="pHeads">
                <div className='pIcons'>
                    <img src={icon} alt={pHead} />
                </div>
                <div>
                    <h3 className="tHead">{pHead}</h3>
                    <p className="pPara1">{para1}</p>
                </div>
            </div>
            
            <div>
                <ul className="pList">
                    {
                        list.map((list, index) =>{return <li key={index}>{list}</li>})
                    }
                </ul>
                <p className="pPara2">{para2}</p>
                <h3 className="bHead">{pHead2}</h3>
                <p className="pPara3">{para3}</p>
                <Button tagValue={btn}/>

            </div>
        </div>
    )
}
export default PlansCard;