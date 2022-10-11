import style from './Cards.module.css'
// import fStyle from '../Product/Features.module.css'

const Cards = (props) => {
    return (
        <div className={style.Cards}>
            <img src={props.image} alt="" />
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Cards;