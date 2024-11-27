// Vue plugin to globally expose a '$t' method that calls common/i18n.t.
// Can be anywhere inside vue as 'this.$t' or '$t' in templates.

import dayjs from 'dayjs';
import i18n from '@/../../common/script/i18n';

function loadLocale (i18nData) {
  // Load i18n strings
  i18n.strings = i18nData.strings;

  // Load dayjs.js locale
  const { language } = i18nData;

  if (language && i18nData.dayjsLang && language.dayjsLangCode) {
    // Make dayjs available under `window` so that the locale can be set
    window.dayjs = dayjs;

    // Execute the script and set the locale
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = i18nData.dayjsLang;
    head.appendChild(script);
    dayjs.locale(language.dayjsLangCode);
  }
}

export default {
  install (Vue, { i18nData }) {
    if (i18nData) loadLocale(i18nData);

    Vue.prototype.$loadLocale = loadLocale;

    Vue.prototype.$t = function translateString (...args) {
      return i18n.t.apply(null, [...args]);
    };
  },
};
