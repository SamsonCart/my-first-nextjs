import ProductsList from "../ProductsList";
import { products } from "../product-data";

export default function ProductsPage() {
  return (
    <>
      <h1 className="text-4xl text-black font-bold mb-6">Products</h1>
      <ProductsList products={products} />
    </>
  )
}