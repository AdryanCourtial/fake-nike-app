import { Tabs } from "expo-router";
import HomeSvgIcon from "~/assets/HomeSvgIcon";
import BadSimpleSvgIcon from "~/assets/BadSimpleSvgIcon";
import GlassesSearchSvgIcon from "~/assets/GlassesSearchSvgIcon";
import HeartStraightSvgIcon from "~/assets/HeartStraightSvgIcon";
import UsersSvgIcon from "~/assets/UsersSvgIcon";
import { Box, Text, useTheme } from "~/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ColorVariants, TextVariants } from "~/theme/theme";
import { ResponsiveValue } from "@shopify/restyle";

export default function TabsLayout() {

    const theme = useTheme()

    const ColorText = (focused: boolean) => {
        return focused ? theme.colors.primaryBlack : theme.colors.grey600
    }

    const VariantText = (focused: boolean) => {
        return focused ? "xs_bold" : "xs_regular"
    }

    const iconSize: number = 28
    return (
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 100,
                    paddingHorizontal: 5,
                    paddingVertical: 5
                },
                tabBarShowLabel: false,
            }}
            >
                <Tabs.Screen 
                name="home"  
                options={{ 
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <HomeSvgIcon width={iconSize} height={iconSize} color={ColorText(focused)}/>
                            <Text variant={VariantText(focused)}> Home </Text>
                        </Box>
                    ),
                }} />
                <Tabs.Screen name="shop" options={{ 
                    title: "Shop",
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <GlassesSearchSvgIcon width={iconSize} height={iconSize} color={ColorText(focused)}/>
                            <Text variant={VariantText(focused)}> Shop </Text>
                        </Box>
                    ),
                }} />

                <Tabs.Screen name="favourites" options={{ 
                    title: "Favourites",
                    
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <HeartStraightSvgIcon width={iconSize} height={iconSize} color={ColorText(focused)}/>
                            <Text variant={VariantText(focused)}> Favourites </Text>
                        </Box>
                    ),
                }} />

                <Tabs.Screen name="bag" options={{ 
                    title: "Bag",
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <BadSimpleSvgIcon width={iconSize} height={iconSize} color={ColorText(focused)} />
                            <Text variant={VariantText(focused)}> Bag </Text>
                        </Box>
                    ),
                }} />

                <Tabs.Screen name="profile" options={{ 
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <UsersSvgIcon width={iconSize} height={iconSize} color={ColorText(focused) }/>
                            <Text variant={VariantText(focused)}> Profile </Text>
                        </Box>
                    ),
                }} />

            </Tabs>
        
    )
}