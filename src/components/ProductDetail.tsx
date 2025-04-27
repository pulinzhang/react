'use client';

import { Product } from '@/mocks/data';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();
  const { t } = useTranslation('common');

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              ¥{product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {t('addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 