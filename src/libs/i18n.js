import I18n from 'react-native-i18n';

import en from 'assets/locales/en.json';

I18n.defaultLocale = 'en';
I18n.fallbacks = true;

I18n.translations = {
  en,
};

export default I18n;