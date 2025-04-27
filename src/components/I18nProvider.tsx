'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useEffect, useState } from 'react';

// 直接导入 JSON 文件
import enCommon from '@/locales/en/common.json';
import enProducts from '@/locales/en/products.json';
import enUsers from '@/locales/en/users.json';
import zhCommon from '@/locales/zh/common.json';
import zhProducts from '@/locales/zh/products.json';
import zhUsers from '@/locales/zh/users.json';

const resources = {
  en: {
    common: enCommon,
    products: enProducts,
    users: enUsers,
  },
  zh: {
    common: zhCommon,
    products: zhProducts,
    users: zhUsers,
  },
};

let i18nInstance: any = null;

export function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initI18n = async () => {
      try {
        if (!i18nInstance) {
          i18nInstance = createInstance({
            resources,
            lng: 'zh',
            fallbackLng: 'zh',
            interpolation: {
              escapeValue: false,
            },
            react: {
              useSuspense: false,
            },
            ns: ['common', 'products', 'users'],
            defaultNS: 'common',
          });

          await i18nInstance.use(initReactI18next).init();
        }
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize i18n:', error);
      }
    };

    initI18n();
  }, []);

  if (!isInitialized || !i18nInstance) {
    return null;
  }

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}

export { i18nInstance as i18n }; 