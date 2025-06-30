import styles from './Header.module.css'
import Logo from './Logo.jsx'
import NavMenu from './NavMenu.jsx'
import Button from '../Button.jsx'
import styles from './Header.module.css'
import LangSelector from './LangSelector.jsx'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
 
const Header = () => {
    const { t } = useTranslation();

    const [isModelOpen, setIsModalOpen] = useState(false)

    return (
        <header>
            <div className={styles.header__container}>
                <Logo />
                <NavMenu variant='white' />
                <div className={styles.headerRight}>
                    <LangSelector/>
                    <Button text={t('login')} widthBtn={77} variant='login'/>
                    <Button text={t('signup')} widthBtn={168}/>
                </div>
            </div>
        </header>
    )
}
export default Header