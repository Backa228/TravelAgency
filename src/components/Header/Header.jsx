import Logo from './Logo.jsx'
import NavMenu from './NavMenu.jsx'
import Button from '../Button.jsx'
import styles from './Header.module.css'
 
const Header = () => {
    return (
        <header>
            <div className={styles.header__container}>
                <Logo />
                <NavMenu variant='white' />
                <div className={styles.headerRight}>
                    <Button text="Login" widthBtn={77}
                    variant='login'/>
                    <Button text="Sing Up" widthBtn={168}/>
                </div>
            </div>
        </header>
    )
}
export default Header