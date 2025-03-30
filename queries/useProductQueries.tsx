import { useQuery } from '@tanstack/react-query';

import { fetchProduct } from '~/api/product';
import { Product } from '~/interface/products.interface';

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
  });
};

export const useGetOneProduct = (id: number) => {
  return useQuery({
    queryKey: ['oneProduct'],
    queryFn: () => fetchProduct.getOneProduct(id) as Promise<Product>,
  });
};
