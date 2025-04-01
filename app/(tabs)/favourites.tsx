import { FlatList, SafeAreaView } from "react-native"
import Animated from "react-native-reanimated"
import { useFade } from "~/animations/useFade"
import BoxItem from "~/components/Home/BoxItem"
import { useFavroutiesStore } from "~/stores/favouritesProduct"
import { Box, Text } from "~/theme"

const FavouritesScreen = () => {

    const { listFavouritesProduct } = useFavroutiesStore()

    const { animatedStyle } = useFade(1)

    return (
        <Box backgroundColor="primaryWhite" flex={1}>
            <SafeAreaView>
                <Text variant={"display_xl_medium"} paddingVertical={"m_16"} paddingHorizontal={"ml_24"}>
                    Favourites
                </Text>
                <Animated.View style={animatedStyle}>

                    <FlatList
                    numColumns={2}
                    data={listFavouritesProduct}
                    initialNumToRender={5}
                    maxToRenderPerBatch={10}
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
                        >
                            {item.title}
                        </BoxItem>
                    )}>

                    </FlatList>
                    </Animated.View>
            </SafeAreaView>
        </Box>

    )
}

export default FavouritesScreen