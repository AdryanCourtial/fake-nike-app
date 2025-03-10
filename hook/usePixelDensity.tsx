import { Dimensions, PixelRatio } from "react-native"

const usePixelDensity = () => {

    const { } = Dimensions.get('window')

    const getPixelDensity = () => {
        const pixelRatio = PixelRatio.get()
        console.log(PixelRatio.getPixelSizeForLayoutSize(pixelRatio))
        console.log(pixelRatio)
    }

    return {
        getPixelDensity
    }
}

export default usePixelDensity