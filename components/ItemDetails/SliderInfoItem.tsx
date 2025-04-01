
import { useState } from "react"
import { FlatList } from "react-native"
import { Box, Text } from "~/theme"
import { windowWidth } from "~/utils/utils"

interface Props {
    data?: { id: number, title: string, description: string }[]
}

const presentationData: { id: number,  title: string, description: string }[] = [
    {
        id: 1,
        title: "Get Your Gear Faster",
        description: "Look for store pick up at checkout."
    },
    {
        id: 2,
        title: "Get Your Gear Faster",
        description: "Look for store pick up at checkout."
    },
    {
        id: 3,
        title: "Get Your Gear Faster",
        description: "Look for store pick up at checkout."
    },
]

const SliderInfoItem: React.FC<Props> = ({ data }) => {

    const [actualIndex, setActualIndex] = useState()
    
    return (
        <Box
            paddingHorizontal="m_20"
            paddingVertical="m_18"
            backgroundColor="grey100"
            borderRadius="m_8"
            width={windowWidth / 1.15}
            >

                <FlatList
                data={data ?? presentationData}
                // pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment="start"
                snapToInterval={windowWidth / 1.15}
                decelerationRate="fast"
                keyExtractor={(item) => item.id.toString()}
                renderItem={( { item, index }) => (
                    <Box width={windowWidth / 1.15}>
                        <Text variant="xl_medium" color="primaryBlack">
                        {item.title}
                        </Text>

                        <Text variant="lg_regular" color="primaryBlack">
                        {item.description}
                        </Text>
                    </Box>
                )}>
                </FlatList>
            <Box gap="xs_4" flexDirection="row" marginTop="ml_28">
                <FlatList
                horizontal
                data={data ?? presentationData}
                contentContainerStyle={{
                    gap: 4
                }}
                renderItem={({index}) => (
                    <Box height={2} width={12} backgroundColor="grey300" />
                )}>

                </FlatList>
            </Box>
        </Box>
    )
}

export default SliderInfoItem