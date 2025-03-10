import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box } from '~/theme';

export default function AccountS6() {

  const { screenHeight, screenWidth } = useDefaultSettingStore()
  

  return (
    <Box
    flex={1} 
    height={screenHeight}
    width={screenWidth}
    padding={'m_16'}>

    </Box>
  )
}
