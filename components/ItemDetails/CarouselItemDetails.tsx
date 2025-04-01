import { useEffect } from "react"
import { FlatList, Image, Pressable } from "react-native"
import Animated from "react-native-reanimated"
import { useFade } from "~/animations/useFade"
import { Product } from "~/interface/products.interface"
import { Box } from "~/theme"

interface Props {
    imgChooseDiaporama: string
    setimgChooseDiaporama: (item: string) => void
    data?: Product
}

const CarouselItemDetails: React.FC<Props> = ({ data, imgChooseDiaporama, setimgChooseDiaporama}) => {

    const { ToggleFade, animatedStyle} = useFade(1)

    useEffect(() => {
        ToggleFade(50)
    }, [imgChooseDiaporama])

    return (
        <Box>
            <Animated.View style={animatedStyle}>
                <Image
                    src={imgChooseDiaporama}
                    style={{
                    width: '100%',
                    height: 465,
                    marginBottom: 2,
                    }}
                />
            </Animated.View>
            <Box width="auto" height={160} flex={1} flexDirection="row" gap="xs_2">
                <FlatList
                data={data?.images}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                gap: 2
                }}
                renderItem={( { item } ) => (
                <Pressable onPress={() => setimgChooseDiaporama(item)} key={item}>
                <Image
                    src={item}
                    style={{
                    aspectRatio: 1 / 1,
                    height: 160,
                    width: 160,
                    resizeMode: 'cover',
                    }}
                />
                </Pressable>
                )}>

                </FlatList>
            </Box>
        </Box>
    )
}

export default CarouselItemDetails