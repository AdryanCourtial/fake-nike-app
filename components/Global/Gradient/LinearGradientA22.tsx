import { Box, useTheme } from "~/theme"
import { LinearGradient } from "expo-linear-gradient"
import { ReactNode } from "react"
import { useDefaultSettingStore } from "~/stores/defaultSetting"

interface Props {
    children?: ReactNode
    indexZ: number
}

export const LinearGradientA22: React.FC<Props> = ({ children, indexZ }) => {

    const theme = useTheme()
    const { screenHeight, screenWidth } =  useDefaultSettingStore()

    return (
        <LinearGradient
        colors={[theme.colors.primaryBlack, "transparent", theme.colors.primaryBlack]}
        locations={[0, 0.45, 1]}
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: screenWidth,
            height: screenHeight,
            elevation: indexZ,
            zIndex: indexZ
        }}
        >
            {children}
        </LinearGradient>

    )
}