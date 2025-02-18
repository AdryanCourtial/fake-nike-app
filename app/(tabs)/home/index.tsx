import { Tabs } from "expo-router"
import usePixelDensity from "~/hook/usePixelDensity"
import { Box, Text } from "~/theme"
import { ImageBackground } from "react-native"
import { Image } from "react-native"
import { ScrollView } from "react-native"
const HomeScreen = () => {

    const PixelDensity = usePixelDensity()
    PixelDensity.getPixelDensity()
    return (
        <ScrollView contentContainerStyle={{ padding: 0 }}>
            <Box justifyContent="center" paddingHorizontal="ml_24" alignItems="flex-start" height={170} >
                <Text variant="display_xl_medium"> Discover </Text>
                <Text variant="xxl_regular" color="grey600"> Tuesday, 3 May </Text>
            </Box>
            <Box margin="none" height={400}>
                <Image 
                source={require('../../../assets/homeImage1.png')}
                style={{
                    resizeMode: "contain",
                    width: '100%',
                    height: '100%',
                    minHeight: "100%",
                    zIndex: 30
                }}
                />
            </Box>
        </ScrollView>
    )
}

export default HomeScreen