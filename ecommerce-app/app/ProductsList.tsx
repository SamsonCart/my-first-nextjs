import Image from 'next/image';
import Link from 'next/link';
import { Product } from './product-data';

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {products.map((product) => (
        <Link key={product.id} href={"/products/" + product.id}>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <Image
              src={'/' + product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-contain rounded-lg mb-4" />
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>{product.name}</h2>
            <p className='text-gray-600 mb-2'>{product.description}</p>
            <p className='text-lg font-semibold text-gray-900'>Price: ${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )

}