import Logo from './Logo.jsx'
import NavMenu from './NavMenu.jsx'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Logo />
                <NavMenu variant='white'/>
                
            </div>
        </header>
    )
}
export default Header