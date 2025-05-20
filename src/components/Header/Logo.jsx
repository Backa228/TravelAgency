import logo from '../../assets/main-logo.svg'

const Logo = () => {
    return (
        <div style={{
            width: 133,
            height: 130,
        }}>
            <img src={logo} alt="Main-logo" style={{ width: "100%" }} />
        </div>
    )
}

export default Logo