import styles from './LangSelector.module.css'
import { FaChevronDown } from "react-icons/fa6";

const LangSelector = () => {
    return (
        <div className = { styles.lang } >
            <select name="LangSelector" id="lang" className={styles.langSelector}>
                <option value="en">Eng</option>
                <option value="ua">Укр</option>
        </select>
        <FaChevronDown  size={20} color='white'/>
        </div>
    )
}

export default LangSelector;