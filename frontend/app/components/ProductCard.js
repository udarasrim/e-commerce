import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-lg"
      />

      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-1">${product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
}
