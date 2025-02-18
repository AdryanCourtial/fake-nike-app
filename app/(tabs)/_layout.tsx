import { Tabs } from "expo-router";
import { Image } from "react-native";
import HomeSvgIcon from "~/assets/HomeSvgIcon";
import BadSimpleSvgIcon from "~/assets/BadSimpleSvgIcon";
import GlassesSearchSvgIcon from "~/assets/GlassesSearchSvgIcon";
import HeartStraightSvgIcon from "~/assets/HeartStraightSvgIcon";
import UsersSvgIcon from "~/assets/UsersSvgIcon";


export default function TabsLayout() {
    return (
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 100,
                    paddingHorizontal: 5,
                    paddingVertical: 5
                },
            }}>
                <Tabs.Screen 
                name="home"  
                options={{ 
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <HomeSvgIcon width={24} height={24}/>
                    )
                }} />
                <Tabs.Screen name="shop" options={{ 
                    title: "Shop",
                    tabBarIcon: ({ focused }) => (
                        <GlassesSearchSvgIcon width={24} height={24}/>
                    )
                }} />

                <Tabs.Screen name="favourites" options={{ 
                    title: "Favourites",
                    tabBarIcon: ({ focused }) => (
                        <HeartStraightSvgIcon width={24} height={24}/>
                    )
                }} />

                <Tabs.Screen name="bag" options={{ 
                    title: "Bag",
                    tabBarIcon: ({ focused }) => (
                        <BadSimpleSvgIcon width={24} height={24}/>
                    )
                }} />

                <Tabs.Screen name="profile" options={{ 
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <UsersSvgIcon width={24} height={24}/>
                    )
                }} />

            </Tabs>
    )
}