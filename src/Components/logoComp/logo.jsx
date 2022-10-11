import style from './logo.module.css'



const Logo = (props) => {
    return (
        <div>
            <img src={props.image} alt='' />
            <span className={style.logoName}>{props.name}</span> 
        </div>
    );
}

export default Logo;