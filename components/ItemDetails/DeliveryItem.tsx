import { Product } from "~/interface/products.interface"
import { Box, Text } from "~/theme"
import { Cta } from "../Global/Cta"
import CarretDownSvgIcon from "~/assets/CarretDownSvgIcon"
import HeartStraightSvgIcon from "~/assets/HeartStraightSvgIcon"

interface Props {
}

const DeliveryItem: React.FC<Props> = ({ }) => {
    return (
        <Box>
            <Box>
                <Text variant="xl_medium">Delivery</Text>
                <Text variant="xxl_regular">Arrives Wed, 11 May</Text>
                <Box flexDirection="row" gap="sm_8">
                  <Text variant="xxl_regular">to Fri, 13 May</Text>
                  <Text variant="xl_medium" textDecorationLine="underline">
                    Edit Location
                  </Text>
                </Box>
              </Box>
              <Box gap="sm_8">
                <Text variant="xl_medium">PIck-Up</Text>
                <Text variant="xl_medium" textDecorationLine="underline">
                  Find a Store
                </Text>
            </Box>
        </Box>
    )
}

export default DeliveryItem