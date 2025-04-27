'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/mocks/data';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // 这里应该是实际的API调用
    // 现在使用模拟数据
    if (email === 'admin@example.com' && password === 'admin123') {
      setUser({
        id: 1,
        name: '管理员',
        email: 'admin@example.com',
        role: '管理员'
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (name: string, email: string, password: string) => {
    // 这里应该是实际的API调用
    // 现在使用模拟数据
    setUser({
      id: Date.now(),
      name,
      email,
      role: '用户'
    });
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 