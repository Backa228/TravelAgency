import styles from './Modal.module.css'
import { CgClose } from "react-icons/cg"

const Modal = ({ onClose, title, children }) => {
    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPtopagation}>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles.closeBtn} onClick={onClose}><CgClose size={12}/></button>
                {children}
            </div>
        </div>
    )
}

export default Modal