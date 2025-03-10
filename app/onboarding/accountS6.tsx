import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box, Text } from '~/theme';

export default function AccountS6() {
  const { screenHeight, screenWidth } = useDefaultSettingStore();

  return (
    <Box
      alignContent="center"
      justifyContent="center"
      backgroundColor="primaryBlack"
      height={screenHeight}
      width={screenWidth}>
      <Text color="primaryWhite" fontSize={32} variant="display_xl_medium">
        How about Bluetooth? Turning it on will help verify your location in select Nike stores to
        improve your experience.
      </Text>
    </Box>
  );
}
