import qStyles from './FAQ.module.css'

import FAQCards from '../Cards/FAQCards'

import { useState } from 'react'

const FAQ = () => {
    let [faq] = useState(
        [
            {
                question: 'How do I grow my business?',
                answer : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
                plus: "+",
                minus: "-"
            },
            {
                question: 'Can I cancel my subscription?',
                answer : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
                plus: "+",
                minus: "-"
            },
            {
                question: 'How do I contact the support?',
                answer : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
                plus: "+",
                minus: "-"
            },
            {
                question: 'Is a credit card required?',
                answer : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
                plus: "+",
                minus: "-"
            },

        ]
    )

    return (
        <section className={qStyles.faq} >
        
            <div className={qStyles.faq1}>
                <h2>Frequestly Asked Questions</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>

            <div className={qStyles.quest}>
                {
                    faq.map((item, index) => {
                        let {question, answer, plus, minus} = item
                        return <FAQCards que={question} ans={answer} plus={plus} minus={minus} key={index}/>
                    })
                }
            </div>
        </section>
    )
}

export default FAQ;