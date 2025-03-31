import { FlatList, Pressable } from "react-native"
import { Category } from "~/interface/categories.interface"
import { Box, Text } from "~/theme"

interface Props {
    setCategoryChoosed: (id: number) => void
    categoryChoosed: number
    data: Category[]
}

const CategoryCarousel: React.FC<Props> = ({ data, categoryChoosed, setCategoryChoosed }) => {

    return (
        <Box 
        height={55}
        flexDirection={"row"}>
            <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <Pressable onPress={() => setCategoryChoosed(item.id ?? 0)}>
                    <Box flex={1} justifyContent={"center"} borderBottomWidth={categoryChoosed === item.id ? 2 : 0} borderBottomColor={"primaryBlack"}>
                        <Text
                        variant={"xxl_regular"}
                        paddingHorizontal={"m_20"}
                        color={ categoryChoosed === item.id ? "primaryBlack" : "grey600"}
                        key={item.id}
                        >
                            {item.name}
                        </Text>
                    </Box>
                </Pressable>
            )}>
            </FlatList>
        </Box>
    )
}

export default CategoryCarousel