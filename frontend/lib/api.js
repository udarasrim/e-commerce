const API_BASE = "https://YOUR-CLOUDFLARE-WORKER-URL";

export async function getProducts() {
  const res = await fetch(`${API_BASE}/products`);
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${API_BASE}/products/${id}`);
  return res.json();
}
