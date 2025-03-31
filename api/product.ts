import { Product } from "~/interface/products.interface";

const getAllProduct = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  if (!res.ok) throw new Error('Erreur lors du fetch des produits');
  return res.json() as Promise<Product[]>;
};

const getShoesProduct = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories/4/products');
  if (!res.ok) throw new Error('Erreur lors du fetch des produits');
  return res.json() as Promise<Product[]>;
};

const getOneProduct = async (id: number) => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products/' + id);
  if (!res.ok) throw new Error('Erreur lors du fetch du produit ' + id);
  return res.json() as Promise<Product>;
};

const getProductByCategories = async (id: number) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
  if (!res.ok) throw new Error('Erreur lors du fetch des produit lié a la category' + id);
  return res.json() as Promise<Product[]>;
};

const fetchProduct = {
  getAllProduct,
  getShoesProduct,
  getOneProduct,
  getProductByCategories,
};

export { fetchProduct };
