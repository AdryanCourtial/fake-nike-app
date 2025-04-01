import { Product } from "~/interface/products.interface"
import { Box, Text, theme } from "~/theme"
import { Cta } from "../Global/Cta"
import CarretDownSvgIcon from "~/assets/CarretDownSvgIcon"
import HeartStraightSvgIcon from "~/assets/HeartStraightSvgIcon"
import { useRouter } from "expo-router"
import { useState } from "react"
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { useBounce } from "~/animations/useBounce"
import AddToBagNotification from "./AddToBagNotifcation"
import { useFavroutiesStore } from "~/stores/favouritesProduct"
import { fakeDataProduct } from "~/utils/fakeDataSkeleton"

interface Props {
    data?: Product
}

const ActionBarItem: React.FC<Props> = ({ data }) => {

    const navigation = useRouter()

    const [favourite, setFavourite] = useState(false)

    const { ToggleBounce, animatedStyle } = useBounce()

    const { setFavouriteProduct } = useFavroutiesStore()

    const [toggleBagNotif, setToggleBagNotif] = useState(false)

    const FavPressed = () => {
        
        if (favourite === false) {
            
            if (!data) return
            setFavouriteProduct(data)
        }
        
        setFavourite(!favourite)
        ToggleBounce(1.2)
    }

    

    return (
        <Box paddingHorizontal="ml_24" paddingVertical="l_32" gap="m_20">

            <Cta action={() => navigation.navigate("/itemDetails/modalSize")} borderColor="grey200" image={<CarretDownSvgIcon />}>
                Select Size
            </Cta>

            <Cta
                backGroundColor="primaryBlack"
                borderColor="primaryBlack"
                textColor="primaryWhite"
                action={() => setToggleBagNotif(true)}>
                Add to Bag
            </Cta>

            <Cta action={FavPressed} borderColor="grey200" image={
                <Animated.View style={animatedStyle}>
                    <HeartStraightSvgIcon
                    stroke={favourite ? theme.colors.error500 : theme.colors.primaryBlack}
                    fill={favourite ? theme.colors.error500 : theme.colors.primaryWhite}
                    />
                </Animated.View>
                }>
                Favourite
            </Cta>

      </Box>
    )
}

export default ActionBarItem