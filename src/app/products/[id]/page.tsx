import { mockProducts } from '@/mocks/data';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = mockProducts.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
} 