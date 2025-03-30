const getAllProduct = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  if (!res.ok) throw new Error('Erreur lors du fetch des produits');
  return res.json();
};

const getShoesProduct = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories/4/products');
  if (!res.ok) throw new Error('Erreur lors du fetch des produits');
  return res.json();
};

const getOneProduct = async (id: number) => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products/' + id);
  if (!res.ok) throw new Error('Erreur lors du fetch du produit ' + id);
  return res.json();
};

const fetchProduct = {
  getAllProduct,
  getShoesProduct,
  getOneProduct,
};

export { fetchProduct };
