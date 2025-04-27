'use client';

import { useState, useEffect } from 'react';
import { mockProducts } from '@/mocks/data';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation(['common', 'products']);
  const [selectedProduct, setSelectedProduct] = useState<typeof mockProducts[0] | null>(null);
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    // 当语言改变时更新产品名称和描述
    const updateProducts = () => {
      setProducts(mockProducts.map(product => ({
        ...product,
        name: i18n.language === 'en' 
          ? `Product ${String.fromCharCode(64 + product.id)}`
          : `产品${String.fromCharCode(64 + product.id)}`,
        description: i18n.language === 'en'
          ? `This is an example product ${String.fromCharCode(64 + product.id)}`
          : `这是一个示例产品${String.fromCharCode(64 + product.id)}`
      })));
    };

    updateProducts();
    i18n.on('languageChanged', updateProducts);

    return () => {
      i18n.off('languageChanged', updateProducts);
    };
  }, [i18n]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('products:title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">¥{product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    {t('common:addToCart')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 