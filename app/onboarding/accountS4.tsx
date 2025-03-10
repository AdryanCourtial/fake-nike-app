import { ImageBackground } from 'react-native';

import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box } from '~/theme';

export default function AccountS4() {
  const { screenHeight, screenWidth } = useDefaultSettingStore();

  return (
    <Box>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/intro.png')}
        style={{
          top: 0,
          left: 0,
          width: screenWidth,
          height: screenHeight,
        }}
      />
    </Box>
  );
}
