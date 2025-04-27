import { mockUsers } from '@/mocks/data';
import { notFound } from 'next/navigation';

interface UserPageProps {
  params: {
    id: string;
  };
}

export default function UserPage({ params }: UserPageProps) {
  const user = mockUsers.find((u) => u.id === parseInt(params.id));

  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              user.role === '管理员' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {user.role}
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-medium text-gray-500">邮箱</h2>
              <p className="mt-1 text-lg text-gray-900">{user.email}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500">用户ID</h2>
              <p className="mt-1 text-lg text-gray-900">{user.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 