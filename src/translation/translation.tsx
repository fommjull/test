import 'react-i18next'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation } from 'react-i18next';


const resources = {
    Čeština: {
    translation: {
      header: 'Pražské zahrady',
      message: 'Zobrazená data ze serveru Mock, zadejte platný Token',
      success: 'Ověření Tokenu bylo úspěšné'
    },
  },
  English: {
    translation: {
      header: 'Prague Gardens',
      message: 'Displayed data from Mock server, enter a valid Token',
      success: 'Token check was successful'
    },
  },
};

const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: 'translation',
  fallbackLng: 'Čeština',
});

function Language() {
  const { t, i18n } = useTranslation();

  return (
    <select className="selectpicker" data-width="fit" defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        {availableLanguages.map((language) => (
      <option data-content='<span class="flag-icon flag-icon-us"></span>'key={language}>{language}</option>
      ))}
    </select>

    
  );
}

export default Language;
