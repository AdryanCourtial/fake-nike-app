import { Box, theme } from "~/theme"
import Animated, { cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withTiming, Easing } from 'react-native-reanimated';
import { useEffect } from "react";
import { DimensionValue } from "react-native";

interface Props {
    width: DimensionValue
    height: DimensionValue
}

const MySkeleton: React.FC<Props> = ({ height, width }) => {

    const opacity = useSharedValue(1);

    useEffect(() => {
      
          //create pulse effect by repeating opacity animation
          opacity.value = withRepeat(
            withTiming(0.4, {
              duration: 1000,
              easing: Easing.linear,
            }),
            -1,
            true
          );
        return () => {
        //cancel running animations after component unmounts
        cancelAnimation(opacity);
        };
    }, []);

    const animatedStyleParent = useAnimatedStyle(() => {
        return {
        opacity: opacity.value,
        };
    });


    return (
        <Animated.View 
        style={[
            { 
                height, 
                width,
                backgroundColor: theme.colors.grey400

             },
            animatedStyleParent,
          ]}
        />
    )
}

export default MySkeleton