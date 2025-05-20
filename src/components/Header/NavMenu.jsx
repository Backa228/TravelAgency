import style from './NavMenu.module.css'
import clsx from "clsx"
const NavMenu = ({variant}) => {
    const links = ["Home", "About Us", "Tour Packages", "Contact Us"]
    
    const linksItems = links.map(link =>
        <li key={link.id} className={clsx(
            styles["listItem"],
            styles[variant]
           )}>
            <a href="#">{link} className={styles.itemLinks}</a>
        </li>
    )
   return (
       <nav className={style.nav-links}>
           <ul className={style.nav-list}>{linksItems}</ul>
        </nav>
    )
}

export default NavMenu;