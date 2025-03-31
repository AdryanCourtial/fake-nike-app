import { Box, Text } from "~/theme"
import FaderHorizontaSvgIcon from "~/assets/FaderHorizontaSvgIcon"
import MagnifyGlassSvgIcon from "~/assets/MagnifyGlassSvgIcon"
import CarretLeftSvgIcon from "~/assets/CarretLeftSvgIcon"

const HeaderShop = () => {
    return (
        <Box 
        flexDirection={"row"}
        paddingHorizontal={"m_16"}
        paddingVertical={"m_12"}
        justifyContent={"space-around"}
        gap={"sm_8"}>
            <Box
            width={68}>
                <CarretLeftSvgIcon />

            </Box>
            <Box>
                <Text variant={"xxl_medium"}>N7 Collection</Text>
            </Box>
            <Box flexDirection={"row"} gap={"m_20"}>
                <Box>
                    <FaderHorizontaSvgIcon />
                </Box>
                <Box>
                    <MagnifyGlassSvgIcon />
                </Box>
            </Box>
        </Box>
    )
}

export default HeaderShop