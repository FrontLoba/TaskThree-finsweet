import Cards from "../Cards/Cards";
import styles from'../Product/Services.module.css'


import icon1 from '../../assests/Icon.svg'
import icon2 from '../../assests/Icon(2).svg'
import icon3 from '../../assests/Icon(3).svg'
import icon4 from '../../assests/Icon(4).svg'
import icon5 from '../../assests/Icon(5).svg'
import icon6 from '../../assests/Icon(6).svg'



let infos = [
    {image: icon1, heading: 'Security and privacy', para: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'},
    {image: icon2, heading: 'Built-in AI features', para: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'},
    {image: icon3, heading: 'Collaborate with others', para: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'},
    {image: icon4, heading: 'Real time sync', para: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'},
    {image: icon5, heading: 'Built-in AI features', para: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'},
    {image: icon6, heading: 'Easy notes organisation', para: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'},
]
function Services () {
    return (
        <div className={styles.Services}>
            <h2>
            Get the best out of your company with our service
            </h2>

            <div className={styles.servCards}>
                {
                    infos.map((item, index) => {
                        let {image, heading, para} = item;
                        return <Cards heading={heading} content={para} image={image} key={index} />
                    })
                }

            </div>

        </div>
    );
}

export default Services;