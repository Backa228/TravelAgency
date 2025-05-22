import styles from './Button.module.css'
import clsx from 'clsx'
const Button = ({ text, onClick, widthBtn, variant }) => {
    return (
        <button className={clsx(
            styles['button'],
            styles[variant],
            )} onClick={onClick} style={{width: widthBtn}}>
        {text}
        </button>
    )
}

export default Button