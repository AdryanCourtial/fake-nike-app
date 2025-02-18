import { Tabs } from "expo-router";
import HomeSvgIcon from "~/assets/HomeSvgIcon";
import BadSimpleSvgIcon from "~/assets/BadSimpleSvgIcon";
import GlassesSearchSvgIcon from "~/assets/GlassesSearchSvgIcon";
import HeartStraightSvgIcon from "~/assets/HeartStraightSvgIcon";
import UsersSvgIcon from "~/assets/UsersSvgIcon";
import { Box, Text, useTheme } from "~/theme";

export default function TabsLayout() {

    const theme = useTheme()

    return (
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 100,
                    paddingHorizontal: 5,
                    paddingVertical: 5
                },
                tabBarShowLabel: false,
            }}>
                <Tabs.Screen 
                name="home"  
                options={{ 
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <HomeSvgIcon width={24} height={24} color={ focused ? theme.colors.primaryBlack : theme.colors.grey600}/>
                            <Text variant={ focused ? "xs_black" : "xs_regular"}> Home </Text>
                        </Box>
                    ),
                }} />
                <Tabs.Screen name="shop" options={{ 
                    title: "Shop",
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <GlassesSearchSvgIcon width={24} height={24} color={ focused ? theme.colors.primaryBlack : theme.colors.grey600}/>
                            <Text variant={ focused ? "xs_black" : "xs_regular"}> Shop </Text>
                        </Box>
                    ),
                }} />

                <Tabs.Screen name="favourites" options={{ 
                    title: "Favourites",
                    
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <HeartStraightSvgIcon width={24} height={24} color={ focused ? theme.colors.primaryBlack : theme.colors.grey600}/>
                            <Text variant={ focused ? "xs_black" : "xs_regular"}> Favourites </Text>
                        </Box>
                    ),
                }} />

                <Tabs.Screen name="bag" options={{ 
                    title: "Bag",
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <BadSimpleSvgIcon width={24} height={24} color={ focused ? theme.colors.primaryBlack : theme.colors.grey600} />
                            <Text variant={ focused ? "xs_black" : "xs_regular"}> Bag </Text>
                        </Box>
                    ),
                }} />

                <Tabs.Screen name="profile" options={{ 
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Box flex={1} justifyContent="center" alignItems="center">
                            <UsersSvgIcon width={24} height={24} color={ focused ? theme.colors.primaryBlack : theme.colors.grey600 }/>
                            <Text variant={ focused ? "xs_black" : "xs_regular"}> Profile </Text>
                        </Box>
                    ),
                }} />

            </Tabs>
    )
}