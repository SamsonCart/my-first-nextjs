import NotFoundPage from "@/app/not-found";
import { products } from "@/app/product-data";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((product) => product.id === params.id);

  if (!product) {
    return <NotFoundPage />
  }

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row bg-white shadow-lg rounded-lg">
      <div className="w-1/2 mb-4 md:mb-0 md:mr-8">
        <img
          src={'/' + product.imageUrl}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-black mb-4">{product!.name}</h1>
        <p className="text-2xl text-gray-600 mb-6">${product!.price}</p>
        <h3 className="text-2xl font-semibold mb-2 text-black">Product Description</h3>
        <p className="text-gray-600">{product!.description}</p>
      </div>
    </div>
  )
}