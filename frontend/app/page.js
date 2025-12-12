import Link from "next/link";
import { getProducts } from "../lib/api";

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border rounded-xl p-4 shadow-sm bg-white">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-60 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mt-4">{p.name}</h3>
            <p className="text-gray-600 mt-1">${p.price}</p>

            <Link
              href={`/products/${p.id}`}
              className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
