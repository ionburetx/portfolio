import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'
import eu from './locales/eu.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      eu: { translation: eu },
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  })

export default i18n
