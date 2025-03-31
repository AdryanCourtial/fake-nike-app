import { Category } from "~/interface/categories.interface";

const getAllCategory = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories');
  if (!res.ok) throw new Error('Erreur lors du fetch des categories');
  return res.json() as Promise<Category[]>;
};

const fetchCategory = {
    getAllCategory
}

export { fetchCategory }