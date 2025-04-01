import { FlatList } from "react-native"
import { Product } from "~/interface/products.interface"
import BoxItem from "../Home/BoxItem"
import { Box, Text } from "~/theme"
import { windowWidth } from "~/utils/utils"
import { RefreshControl } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import Animated from "react-native-reanimated"
import { useFade } from "~/animations/useFade"

interface Props {
    data: Array<Product>
    isLoading: boolean,
    isError: Boolean
    categoryChoosed: number
    refetchData: () => void
}


const ListProductCategory: React.FC<Props> = ({ data, isLoading, isError, categoryChoosed, refetchData }) => {

    const [refreshing, setRefreshing] = useState(false)

    const { ToggleFade, animatedStyle} = useFade(1)

    useEffect(() => {
        if (isLoading === false) {
            ToggleFade(100)
        }
    }, [isLoading])

    return (
        <Box>
            
            {
                !isError ? (
                <Animated.View style={animatedStyle}>

                    <FlatList
                    numColumns={2}
                    data={data}
                    initialNumToRender={5}
                    maxToRenderPerBatch={10}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refetchData} />
                    }
                    columnWrapperStyle={{
                        gap: 6
                    }}
                    contentContainerStyle={{
                        gap: 40
                    }}
                    renderItem={({ item }) => (
                        <BoxItem
                        id={item.id}
                        price={item.price}
                        srcImage={item.images[0]}
                        key={item.id}
                        paddingHorizontalDescription='m_12'
                        isLoading={isLoading}
                        >
                            {item.title}
                        </BoxItem>
                    )}>

                    </FlatList>
                </Animated.View>
                ) : <Box paddingTop={"l_35"} justifyContent={"center"} alignItems={"center"}><Text variant={"xl_medium"} textAlign={"center"} color={"error500"}>Une Erreur est survenu lors du chargement des produits</Text></Box>
            }
        </Box>
    )
}

export default ListProductCategory