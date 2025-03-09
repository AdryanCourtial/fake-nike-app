import { Link, Tabs } from "expo-router"
import usePixelDensity from "~/hook/usePixelDensity"
import { Box, Text } from "~/theme"
import { ImageBackground } from "react-native"
import { Image } from "react-native"
import { ScrollView } from "react-native"
import BoxItem from "../../../components/Home/BoxItem"
const HomeScreen = () => {

    const PixelDensity = usePixelDensity()
    PixelDensity.getPixelDensity()
    return (
        <Box backgroundColor="primaryWhite">
            <ScrollView contentContainerStyle={{ padding: 0 }}>
                <Box justifyContent="center" paddingHorizontal="ml_24" alignItems="flex-start" height={200} >
                    <Text variant="display_xl_medium"> Discover </Text>
                    <Text variant="xxl_regular" color="grey600"> Tuesday, 3 May </Text>
                </Box>
                    <Image 
                    source={require('../../../assets/homeImage1.png')}
                    style={{
                        width: "100%",
                        height: 550,
                        resizeMode: "cover",
                    }}
                    />
                <Box>
                    <Box paddingHorizontal="ml_24" paddingTop="l_40">
                        <Text variant="xxl_medium" marginBottom="m_12"> What’s new </Text>
                        <Text variant="display_xl_medium" color="grey600">The latest arrivals from Nike</Text>
                    </Box>
                    <Box>
                        <ScrollView horizontal>
                            <BoxItem id="1" price="185"  widgth={200}>Air Jordan XXXVI</BoxItem>
                            <BoxItem id="2" price="185"  widgth={200}>Air Jordan XXXVI</BoxItem>
                        </ScrollView>
                    </Box>
                </Box>
                <Image 
                    source={require('../../../assets/imageHome2.png')}
                    style={{
                        width: "100%",
                        height: 380,
                        resizeMode: "cover",
                    }}
                    />
            </ScrollView>
        </Box>
    )
}

export default HomeScreen