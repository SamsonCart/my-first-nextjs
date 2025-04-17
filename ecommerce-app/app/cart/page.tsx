'use client';

import { useState } from 'react';
import { products } from '../product-data';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const [cartIds, setCartIds] = useState(['123', '456']);
  const cartProducts = cartIds.map((id) => products.find((product) => product.id === id)!);

  return (
    <>
      <h1 className="font-bold text-4xl mb-6"> Shopping Cart </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8'>
        {cartProducts.map(product => (
          <Link key={product.id} href={"/products/" + product.id}>
            <div className='bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300'>
              <Image
                src={'/' + product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className='text-lg font-semibold text-gray-900'>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}