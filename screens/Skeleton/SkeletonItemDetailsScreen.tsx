import { FlatList } from "react-native"
import { GenerateArray } from "~/utils/utils"
import MySkeleton from "~/components/MySkeleton"
import { Box } from "~/theme"

const SkeletonItemDetailsScreen = () => {
    return (
        <Box>
              <MySkeleton width={465} height={465} />
              <Box width="auto" height={160} flex={1} flexDirection="row" gap="xs_2" marginTop={"xs_2"}>
                <FlatList
                data={GenerateArray(5)}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 2
                }}
                renderItem={() => (
                    <MySkeleton  width={160} height={160}/> 
                )}>

                </FlatList>
              </Box>
            <Box marginHorizontal="ml_24" marginVertical="l_35" height="auto" gap="l_32">
              <Box gap="m_16">
                <Box gap="s_6">
                    <MySkeleton height={30} width={"100%"} />
                    <MySkeleton height={30} width={"100%"} />
                </Box>
                <Box>
                    <MySkeleton height={30} width={"100%"} />
                </Box>
              </Box>

              <Box>
                <MySkeleton height={30} width={"100%"} />
              </Box>

              <Box>
                <MySkeleton height={30} width={"100%"} />
              </Box>
            </Box>

            <Box paddingHorizontal="ml_24" paddingVertical="l_32" gap="m_20">
                <MySkeleton width={"100%"} height={100} />
                <MySkeleton width={"100%"} height={100} />
                <MySkeleton width={"100%"} height={100} />
            </Box>
            <Box padding="ml_24" gap="ml_24">
              <Box
                paddingHorizontal="m_20"
                paddingVertical="m_18"
                backgroundColor="grey100"
                borderRadius="m_8">
                    <MySkeleton width={"100%"} height={30}/>
                    <MySkeleton width={"100%"} height={30}/>

                <Box gap="xs_4" flexDirection="row" marginTop="ml_28">
                  <Box height={2} width={12} backgroundColor="grey300" />
                  <Box height={2} width={12} backgroundColor="grey300" />
                  <Box height={2} width={12} backgroundColor="primaryBlack" />
                </Box>
              </Box>
              <Box>
                <MySkeleton width={"100%"} height={30}/>
                <MySkeleton width={"100%"} height={30}/>

                <Box flexDirection="row" gap="sm_8">
                    <MySkeleton width={"100%"} height={30}/>
                    <MySkeleton width={"100%"} height={30}/>

                </Box>
              </Box>
              <Box gap="sm_8">
                <MySkeleton width={"100%"} height={30}/>
                <MySkeleton width={"100%"} height={30}/>
              </Box>
            </Box>
          </Box>
    )
}

export default SkeletonItemDetailsScreen