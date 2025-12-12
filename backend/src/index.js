const products = [
  {
    id: 1,
    name: "Cotton Shirt",
    price: 20,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "High-quality soft cotton shirt perfect for casual wear."
  },
  {
    id: 2,
    name: "Black T-Shirt",
    price: 15,
    image: "https://images.unsplash.com/photo-1585386959984-a4155223f1d1",
    description: "Modern black T-shirt with premium stitching."
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: 35,
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
    description: "Comfort-fit denim jeans made from durable fabric."
  }
];

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/products") {
      return Response.json(products);
    }

    const match = url.pathname.match(/^\/products\/(\d+)$/);
    if (match) {
      const product = products.find(p => p.id === Number(match[1]));
      return product
        ? Response.json(product)
        : new Response("Product not found", { status: 404 });
    }

    return new Response("Not Found", { status: 404 });
  }
};
