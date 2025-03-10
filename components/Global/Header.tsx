import { Box } from "~/theme"
import { Text } from "~/theme"

const HeaderMain = () => {
    return (
        <Box backgroundColor="error400" height={100} flex={1} justifyContent="center" alignItems="center">
            <Text style={{ color: "#ffffff" }}> Salut </Text>
        </Box>
    )
}

export default HeaderMain