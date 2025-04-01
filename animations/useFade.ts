import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

export const useFade = (defaultOpacity: number) => {
    const opacity = useSharedValue(defaultOpacity)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    })

    const ToggleFade = (duration: number) => {
        opacity.value = withTiming(0, { duration: duration }, (finished) => {
            if (finished) {
                opacity.value = withTiming(1, { duration: 150 })
            }
        })
    }


    return {
        opacity,
        animatedStyle,
        ToggleFade
    }
}