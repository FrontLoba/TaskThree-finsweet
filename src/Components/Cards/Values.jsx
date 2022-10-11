import style from '../Product/Core-Values.module.css'


const Values = (props) => {
    return (
        <div className={props.position === "right" ? style.reserves : style.values} >
            <div className={style.vals}>
                <p className={style.mixColor}>{props.parag}</p>
                <h3>{props.heading}</h3>
                <p>{props.content}</p>
            </div>
            <div>
            <img src={props.image} alt="" />
            </div>
        </div>
    );
}
export default Values;