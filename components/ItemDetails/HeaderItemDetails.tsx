import { useNavigation } from "expo-router"
import { Pressable } from "react-native"
import CarretLeftSvgIcon from "~/assets/CarretLeftSvgIcon"
import MagnifyGlassSvgIcon from "~/assets/MagnifyGlassSvgIcon"
import { Box, Text } from "~/theme"

interface Props {
    title: string
}

const HeaderItemDetails: React.FC<Props> = ({ title }) => {

    const navigation = useNavigation();
    
    return (
        <Box
        height={50}
        flex={1}
        flexDirection={"row"}
        alignItems={"center"} 
        justifyContent={"space-between"} 
        paddingHorizontal={"m_16"} gap={"sm_8"} 
        paddingVertical={"m_12"}
        >
            <Box width={70}>
                <Pressable
                onPress={() => navigation.goBack()}>
                    <CarretLeftSvgIcon />
                </Pressable>
            </Box>
            <Box flex={1}>
                <Text variant={"xxl_medium"} textAlign={"center"}>{title}</Text>
            </Box>
            <Box width={70} flexDirection={"row"} justifyContent={"flex-end"}>
                <MagnifyGlassSvgIcon />
            </Box>
        </Box>
    )
}

export default HeaderItemDetails