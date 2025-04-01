import { FlatList } from "react-native"
import { GenerateArray, windowWidth } from "~/utils/utils"
import MySkeleton from "~/components/MySkeleton"

const SkeletonShopScreen = () => {
    return (
        <FlatList
        numColumns={2}
        data={GenerateArray(8)}
        columnWrapperStyle={{
            gap: 6
        }}
        contentContainerStyle={{
            gap: 40
        }}
        renderItem={() => (
            <MySkeleton
            width={windowWidth / 2}
            height={windowWidth / 2}>

            </MySkeleton>
        )}>

        </FlatList>
    )
}

export default SkeletonShopScreen