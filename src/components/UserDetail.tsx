'use client';

import { User } from '@/mocks/data';
import { useTranslation } from 'react-i18next';

interface UserDetailProps {
  user: User;
}

export default function UserDetail({ user }: UserDetailProps) {
  const { t } = useTranslation('common');

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{user.name}</h1>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500">{t('email')}</label>
              <p className="mt-1 text-lg text-gray-900">{user.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">{t('role')}</label>
              <p className="mt-1 text-lg text-gray-900">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 