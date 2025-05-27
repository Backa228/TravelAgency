import styles from './LangSelector.module.css'
import { FaChevronDown } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const LangSelector = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'ua', label: 'UA' }
    ]

    const currentLang = t.language;

    const toggleDropdown = () => setOpen((prev) => !prev);

    const handleLanguageChange = (code) => {
        t.changeLanguage(code);
        setOpen(false);
    }
    return (
        <div className={styles.lang} >
            <button onClick={toggleDropdown} className={styles.langSelector}>
                {currentLang}
                <FaChevronDown  size={20} color='white'/>
            </button>
            {open && (
                <ul className={styles.dropdown}>
                    {languages.map((lang) => (
                        <li>
                            <button onClick={() => handleChangeLanguage(lang.code)}
                            disabled={currentLAng === lang.code}>{lang.label}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default LangSelector;