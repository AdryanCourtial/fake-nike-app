/* eslint-disable react-hooks/rules-of-hooks */

import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { useFade } from "~/animations/useFade";
import { Box, Text } from "~/theme";
import { windowHeight, windowWidth } from "~/utils/utils";

interface Props {

}

const PresentationData: string[] = [
  "S (3Y-5Y / W 4-6)",
  "M (3Y-5Y / W 4-6)",
  "L (3Y-5Y / W 4-6)"
]

const modalSize: React.FC<Props> = () => {

  const navigation = useNavigation()

  const { ToggleFade, animatedStyle} = useFade(0)

  useEffect(() => {
     ToggleFade(100)
  }, [])

  return (
    <Box position={"relative"} height={windowHeight} width={windowWidth}>
        <Box position={"static"} top={0} left={0} bottom={0} right={0} backgroundColor={"primaryBlack"} opacity={0.5}>
          <Pressable style={{
            width: "100%",
            height: "100%"
          }} onPress={() => {navigation.goBack(); console.log("teeeeest")}}>
            <Text> Essaie </Text>
          </Pressable>
        </Box>
        <Animated.View style={animatedStyle}>
        <Box borderTopLeftRadius={"xl_24"} position={"absolute"} backgroundColor={"primaryWhite"} minHeight={400} bottom={0} width={windowWidth}>
            <Box height={75} justifyContent={"flex-start"} flexDirection={"row"} alignItems={"center"} paddingLeft={"ml_24"}>
                <Text variant={"display_xl_medium"}>Select Size to see options</Text>
            </Box>
            <FlatList
            data={PresentationData}
            renderItem={({ item }) => (
              <Box paddingLeft={"ml_24"} height={75} flexDirection={"row"} alignItems={"center"} borderColor={"grey400"} borderTopWidth={1}>
                <Text variant={"xl_medium"}>
                   {item}
                </Text>
              </Box>
            )}>

            </FlatList>
        </Box>
        </Animated.View>
    </Box>
  )
}

export default modalSize
