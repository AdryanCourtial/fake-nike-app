import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box, Text } from '~/theme';

const AccountSetupShoesSize = () => {

    const { screenHeight, screenWidth } = useDefaultSettingStore()

    const ArrayShoesSize = [
        "4", "4.5", "5", "5.5", "6", "6.5", "7", "7,5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15", "16" 
    ]

    return (
        <Box 
        flex={1} 
        backgroundColor={'primaryBlack'}
        height={screenHeight}
        width={screenWidth}>
            <Box 
            gap={'m_12'}>
                <Box             
                flex={1}
                flexDirection={'row'}
                marginTop={'m_12'}
                justifyContent={'center'}>
                    <Text
                    color="primaryWhite" 
                    variant={"display_xxl_medium"}>
                        What’s your shoe size?
                    </Text>
                </Box>
                <Box flex={1} flexWrap={"wrap"} 
                flexDirection={"row"}
                gap={'m_12'}
                style={{
                    flex: 4,
                    marginHorizontal: "auto",
                    backgroundColor: "red"
                }}>
                    {
                        ArrayShoesSize.map((itemDetails, index) => (
                        <Box
                        key={index}
                        backgroundColor={"grey800"}
                        height={51}
                        width={70}
                        borderRadius={'m_6'}
                        alignItems={'center'}
                        > 
                        <Text color={"primaryWhite"}
                        textAlign={'center'}>
                            {itemDetails}
                        </Text>
                        </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default AccountSetupShoesSize;
