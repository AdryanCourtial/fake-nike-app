import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Cta } from '~/components/Global/Cta';
import { ShoesItemSize } from '~/components/OnBoarding/ShoesItemsSize';
import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box, Text } from '~/theme';

const AccountS2 = () => {

    const { screenHeight, screenWidth } = useDefaultSettingStore()

    const ArrayShoesSize = [
        "4", "4.5", "5", "5.5", "6", "6.5", "7", "7,5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15", "16" 
    ]

    const [indexSizeChoose, setIndexSizeChoose] = useState<number | null>(null)

    const insets = useSafeAreaInsets()

    return (
        <Box 
        flex={1} 
        height={screenHeight}
        width={screenWidth}
        gap={'m_12'}
        padding={'m_20'}
        style={{
            paddingBottom: insets.bottom
        }}
        >
            <Box
            flexDirection={'row'}
            justifyContent={'center'}
            marginTop={'m_12'}>
                <Text color={'primaryWhite'} variant={"display_xxl_medium"}>
                    What’s your shoe size?
                </Text>
            </Box>
            <Box 
            flexDirection={'row'}
            flexWrap={'wrap'}
            gap={'m_16'}
            marginTop={'m_12'}
            justifyContent={'center'}
            >
                {
                    ArrayShoesSize.map((item, index) => (
                        <ShoesItemSize 
                        key={index}
                        index={index}
                        chooseSize={() => setIndexSizeChoose(index)}
                        size={indexSizeChoose}
                        height={51}
                        width={72}
                        > {item} </ShoesItemSize>
                    ))
                }
            </Box>
            <Box 
            zIndex={2} 
            elevation={2}
            position={'absolute'}
            bottom={100 + insets.bottom}
            width={screenWidth}
            justifyContent={'center'}
            alignItems={'center'}
            >
              <Cta 
              backGroundColor={indexSizeChoose !== null ? "primaryWhite" : "grey800"} 
              width={190} 
              textColor={indexSizeChoose !== null ? "primaryBlack" : "grey500"}
              borderColor={indexSizeChoose !== null ? "primaryWhite" : "primaryBlack"}>{ indexSizeChoose !== null ? 'Get Started' : 'Skip' }</Cta>
            </Box>
        </Box>
    );
};

export default AccountS2;
