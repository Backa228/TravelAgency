import heroBg from '../assets/heroBg.jpg'
import styles from './Hero.module.css'
// import clsx from "clsx"

const Hero = () => {
    return (
        <section className={styles.hero} style={{
            backgroundImage: `url(${heroBg})`,  
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* <img src={heroBg} alt="Hero-bg" className={styles.heroBg} /> */}
            <div className={styles.hero__container}></div>
        </section>
    )
}

export default Hero;