import styles from './Modal.module.css'
import { CgClose } from "react-icons/cg"



const Modal = ({ onClose, title, children }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modal}>
                <div className={styles.modalContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.closeBtn} onClick={onClose}><CgClose size={12} /></button>
                    {children}
                </div>
                
            </div>
        </div>
    )
}
export default Modal