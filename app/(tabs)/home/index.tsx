import { Tabs } from "expo-router"
import usePixelDensity from "~/hook/usePixelDensity"
import { Box, Text } from "~/theme"

const HomeScreen = () => {

    const PixelDensity = usePixelDensity()
    PixelDensity.getPixelDensity()
    return (
        <Box>
            <Text>
                Salut je suis la page Home
            </Text>
        </Box>
    )
}

export default HomeScreen