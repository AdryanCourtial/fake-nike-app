import { Href, Link, LinkProps } from "expo-router"
import React from "react"
import { Image } from "react-native"
import { Box , Text} from "~/theme"

interface Props {
    id:  string
    srcImage?: string
    widgth: number
    price: string
    children: string
}

const BoxItem: React.FC<Props> = ({ widgth, children, price, srcImage, id}) => {
    return (
    <Link href={("/itemDetails/" + id) as Href<string>}>
        <Box flex={1} flexDirection="column" padding="ml_24" gap="m_20">
            <Image 
            source={require("../../assets/chaussureTest.png")}
            width={200}
            style={{
                aspectRatio: 1/1
            }}
            />
            <Box flex={1} flexDirection="column" gap="m_16">
                <Text variant="md_bold" >{children}</Text>
                <Text variant="md_bold" color="grey600">{price}€</Text>
            </Box>
        </Box>
    </Link>
    )
}

export default BoxItem