import { getProduct } from "../../../lib/api";

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>

      <p className="text-xl text-gray-700 mt-2">
        <strong>Price:</strong> ${product.price}
      </p>

      <p className="text-gray-600 mt-4">{product.description}</p>

      <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">
        Add to Cart
      </button>
    </div>
  );
}
