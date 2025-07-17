import styles from './Header.module.css'
import Logo from './Logo.jsx'
import NavMenu from './NavMenu.jsx'
import Button from '../Button.jsx'
import LangSelector from './LangSelector.jsx'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Modal from './Modal.jsx'
import LoginForm from './LoginForm.jsx'
 
const Header = () => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalType, setModalType] = useState(null)

    const openModal = (type) => {
        setModalType(type)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setModalType(null)
        setIsModalOpen(false)
    }

    const getModalContent = () => {
        switch (modalType) {
            case 'Login': return <LoginForm/>
            case 'Create Account': return <SingupForm/>
            case 'Forgot Password': return <FogotPassForm/>
            case 'Check your email': return <VerifyEmail />
            case 'Set New Password': return <NewPassForm/>
            case 'Reset Password': return <ResetPass />
            default: return null
        }
    }

    return (
        <header>
            <div className={styles.header__container}>
                <Logo />
                <NavMenu variant='white' />
                <div className={styles.headerRight}>
                    <LangSelector/>
                    <Button text={t('login')} widthBtn={77} variant='login' onClick={() => openModal('Login')}/>
                    <Button text={t('signup')} widthBtn={168}/>
                </div>
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal} title={modalType}>
                    {getModalContent()}
                    {/*<LoginFrom*/}
                </Modal>
            )}
        </header>
    )
}
export default Header