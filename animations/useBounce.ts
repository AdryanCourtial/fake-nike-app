import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"

export const useBounce = () => {
    const scale = useSharedValue(1)

    const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [{ scale: scale.value }],
        }
      })

    const ToggleBounce = (value: number) => {

        scale.value = value

        scale.value = withSpring(1, {
            damping: 4,
            stiffness: 200,
            mass: 0.5,
        })
    }


    return {
        scale,
        animatedStyle,
        ToggleBounce
    }
}