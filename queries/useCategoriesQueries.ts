import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "~/api/categories";

export const useAllCategories = () => {
    return useQuery({
        queryKey: ['allCategories'],
        queryFn: fetchCategory.getAllCategory,
    });
};