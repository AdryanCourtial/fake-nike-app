import { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CategoryCarousel from "~/components/Shop/CategoryCarousel"
import HeaderShop from "~/components/Shop/HeaderSearch"
import ListProductCategory from "~/components/Shop/ListProductCategory"
import { useAllCategories } from "~/queries/useCategoriesQueries"
import { useAllProdutFromCategory } from "~/queries/useProductQueries"
import { Box } from "~/theme"
import { GenerateFakeElementProduct } from "~/utils/fakeDataSkeleton"

const ShopScreen = () => {

    const [categoryChoosed, setCategoryChoosed] = useState(0)

    const allCategoriesQuery = useAllCategories()

    const allProductFromCategoryQuery = useAllProdutFromCategory(categoryChoosed)

    useEffect(() => {
        if (allCategoriesQuery.data) {
            setCategoryChoosed(allCategoriesQuery.data[0].id ?? 0)
        }
    }, [allCategoriesQuery.data])

    return (
        <Box backgroundColor="primaryWhite" flex={1}>
            <SafeAreaView>
                <HeaderShop /> 

                <CategoryCarousel
                    data={ allCategoriesQuery.data || []}
                    categoryChoosed={categoryChoosed}
                    setCategoryChoosed={setCategoryChoosed}
                />

                <ListProductCategory
                isLoading={allProductFromCategoryQuery.isLoading}
                data={allProductFromCategoryQuery.data || GenerateFakeElementProduct(8)}
                isError={!!allProductFromCategoryQuery.error}
                categoryChoosed={categoryChoosed}
                refetchData={() => allProductFromCategoryQuery.refetch()}
                />

            </SafeAreaView> 
        </Box>
    )
}

export default ShopScreen