import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React",
      "Copy": "Copy",
      "Delete": "Delete",
      "Add to Chrome": "Add to Chrome",
      "Upgrade to Pro": "Upgrade to Pro",
      "characters": "characters",
      "words": "words",
      "Settings": "Settings",
      "Contact support": "Contact support",
    }
  },
  ka: {
    translation: {
      "Welcome to React": "ველქამ",
      "Copy": "კოპირება",
      "Delete": "წაშლა",
      "Add to Chrome": "ქრომში დამატება",
      "Upgrade to Pro": "განახლება",
      "characters": "სიმბოლო",
      "words": "სიტყვა",
      "Settings": "პარამეტრები",
      "Contact support": "დახმარება",
    }
  },
  // More languages...
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
