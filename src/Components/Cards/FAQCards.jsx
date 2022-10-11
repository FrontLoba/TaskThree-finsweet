import { useState } from 'react';
import qStyles from '../Pricing/FAQ.module.css'


const FAQCards = ({que, ans, plus, minus}) => {
    const [queAns, setQuesAns] = useState(true)

    const handleClick = () => {
        setQuesAns(queAns => !queAns)
    }
    return (
        <div onClick={handleClick}>
            <h3>
                <span className={qStyles.headThree}>{que}</span>
                {
                    queAns ? 
                    <span className={qStyles.plusSign}>{plus}</span> :
                    <span className={qStyles.minusSign}>{minus}</span>
                }
            </h3>
        
            <p className={!queAns ? qStyles.openAns : qStyles.closeAns}>{ans}</p>
        </div>
        
    )
}

export default FAQCards;