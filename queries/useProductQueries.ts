import { useQuery } from '@tanstack/react-query';

import { fetchProduct } from '~/api/product';

export const useAllProductQuery = () => {
  return useQuery({
    queryKey: ['allProduct'],
    queryFn: fetchProduct.getAllProduct,
  });
};

export const useShoesProductQuery = () => {
  return useQuery({
    queryKey: ['shoesProduct'],
    queryFn: fetchProduct.getShoesProduct,
  }) ;
};

export const useGetOneProduct = (id: number) => {
  return useQuery({
    queryKey: ['oneProduct', id],
    queryFn: () => fetchProduct.getOneProduct(id),
  });
};

export const useAllProdutFromCategory = (id: number) => {
  return useQuery({
    queryKey: ['ManyProductFromCategory', id],
    queryFn: () => fetchProduct.getProductByCategories(id),
  });
};
