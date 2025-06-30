import styles from './Modal.module.css'

const Modal = ({ onClose }) => {
    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPtopagation}>
                <button className={styles.closeBtn} onClick={onClose}></button>
                <h2 className={styles.title}>{title}</h2>
            </div>
        </div>
    )
}

export default Modal