'use client';

import { mockUsers, mockProducts } from '@/mocks/data';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Next.js 示例网站</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 用户列表 */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">用户列表</h2>
          <div className="space-y-6">
            {mockUsers.map((user) => (
              <Link 
                key={user.id} 
                href={`/users/${user.id}`}
                className="block border-2 border-gray-100 p-6 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-900">{user.name}</h3>
                <p className="text-gray-700 mt-2 text-lg">{user.email}</p>
                <span className={`inline-block mt-4 px-4 py-2 rounded-full text-base font-semibold ${
                  user.role === '管理员' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {user.role}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 产品列表 */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">产品列表</h2>
          <div className="space-y-6">
            {mockProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block border-2 border-gray-100 p-6 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-gray-700 mt-2 text-lg">{product.description}</p>
                <p className="mt-4 text-2xl font-bold text-green-600">
                  ¥{product.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
