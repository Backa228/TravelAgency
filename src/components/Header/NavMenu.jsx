import styles from './NavMenu.module.css'
import clsx from "clsx"
import { useTransition } from 'react-i18next'

const NavMenu = ({ variant }) => {
    const { t } = useTransition()
    const links = ["home", "about", "tour", "contact"]
    
    const linksItems = links.map(link =>
        <li key={link.id} className={clsx(
            styles["listItem"],
            styles[variant]
           )}>
            <a href="#" className={styles.itemLinks}>{t(link)} </a>
        </li>
    )
   return (
       <nav className={styles.navLinks}>
           <ul className={styles.navList}>{linksItems}</ul>
        </nav>
    )
}

export default NavMenu;