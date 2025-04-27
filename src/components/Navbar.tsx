'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import { i18n } from './I18nProvider';

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const { t } = useTranslation('common');

  const changeLanguage = async (lang: string) => {
    try {
      if (i18n) {
        await i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
      }
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                {t('home')}
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/products"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {t('products')}
              </Link>
              <Link
                href="/users"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {t('users')}
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <input
                type="text"
                placeholder={t('search')}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div className="flex items-center space-x-4">
                  {user ? (
                    <>
                      <span className="text-gray-700">{user.name}</span>
                      <button
                        onClick={logout}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {t('logout')}
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {t('login')}
                      </Link>
                      <Link
                        href="/register"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {t('register')}
                      </Link>
                    </>
                  )}
                  <div className="relative">
                    <Link href="/cart" className="text-gray-500 hover:text-gray-700">
                      <span className="sr-only">{t('cart')}</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {totalItems}
                        </span>
                      )}
                    </Link>
                  </div>
                  <select
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="text-gray-500 hover:text-gray-700 bg-transparent border-none focus:outline-none"
                    value={i18n?.language || 'zh'}
                  >
                    <option value="zh">中文</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 