import { Product } from "~/interface/products.interface"
import { Box, Text } from "~/theme"

interface Props {
    data?: Product
}

const DescriptionItem: React.FC<Props> = ({ data }) => {
    return (
        <Box marginHorizontal="ml_24" marginVertical="l_35" height="auto" gap="l_32">
        <Box gap="m_16">
          <Box gap="s_6">
            <Text variant="xxl_regular" color="primaryBlack">
              {data?.category.name}
            </Text>
            <Text variant="display_xl_medium" color="primaryBlack">
              {data?.title}
            </Text>
          </Box>
          <Box>
            <Text variant="xxl_medium" color="primaryBlack">
              {'US$' + data?.price}
            </Text>
          </Box>
        </Box>

        <Box>
          <Text variant="lg_regular" color="primaryBlack">
            {data?.description}
          </Text>
        </Box>

        <Box>
          <Text variant="lg_regular" color="grey600">
            View Product Details
          </Text>
        </Box>
      </Box>
    )
}

export default DescriptionItem