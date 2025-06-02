import styles from './LangSelector.module.css'
import { FaChevronDown } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LangSelector = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        {code: 'en', label: 'Eng'},
        {code: 'ua', label: 'Ukr'},
    ];

    const currentLang = i18n.language;

    const toggleDropdown = () => setOpen((prev) => !prev);

    const handleChangeLanguage = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };
    
    return (
        <div className={styles.lang}>
            <button onClick={toggleDropdown} className={styles.langSelector}>
                {currentLang}
                <FaChevronDown size={20} color='white'/>
            </button>

            {open && (
                <ul className={styles.dropdown}>
                    {languages.map((lang) => (
                        <li key={lang.code}>
                            <button 
                            onClick={() => handleChangeLanguage(lang.code)}
                            disabled={currentLang === lang.code}>{lang.label}
                            </button>
                        </li>
                    ))}    
                </ul>
            )}
        </div>
    )
}

export default LangSelector;