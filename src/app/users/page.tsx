'use client';

import { mockUsers } from '@/mocks/data';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UsersPage() {
  const { t, i18n } = useTranslation(['common', 'users']);
  const [users, setUsers] = useState(mockUsers);

  useEffect(() => {
    // 当语言改变时更新用户角色显示
    const updateUsers = () => {
      setUsers(mockUsers.map(user => ({
        ...user,
        role: i18n.language === 'en' 
          ? (user.role === '管理员' ? 'Admin' : 'User')
          : user.role
      })));
    };

    updateUsers();
    i18n.on('languageChanged', updateUsers);

    return () => {
      i18n.off('languageChanged', updateUsers);
    };
  }, [i18n]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('users:title')}</h1>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="border-b border-gray-200 pb-4 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.role === (i18n.language === 'en' ? 'Admin' : '管理员') 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 