import styles from './NavMenu.module.css'
import clsx from "clsx"
const NavMenu = ({variant}) => {
    const links = ["Home", "About Us", "Tour Packages", "Contact Us"]
    
    const linksItems = links.map(link =>
        <li key={link.id} className={clsx(
            styles["listItem"],
            styles[variant]
           )}>
            <a href="#" className={styles.itemLinks}>{link} </a>
        </li>
    )
   return (
       <nav className={styles.navLinks}>
           <ul className={styles.navList}>{linksItems}</ul>
        </nav>
    )
}

export default NavMenu;