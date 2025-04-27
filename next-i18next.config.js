/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },
  localePath: './src/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  defaultNS: 'common',
  fallbackLng: 'zh',
  debug: process.env.NODE_ENV === 'development',
}; 