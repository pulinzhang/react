import { mockUsers } from '@/mocks/data';
import { notFound } from 'next/navigation';
import UserDetail from '@/components/UserDetail';

interface UserPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return mockUsers.map((user) => ({
    id: user.id.toString(),
  }));
}

export default function UserPage({ params }: UserPageProps) {
  const user = mockUsers.find((u) => u.id === parseInt(params.id));

  if (!user) {
    notFound();
  }

  return <UserDetail user={user} />;
} 