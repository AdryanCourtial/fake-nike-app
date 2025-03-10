import LogoScreen from '~/components/logocomponents';
import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box, Text } from '~/theme';

const WelcomeScreen = () => {

    const { screenHeight, screenWidth } = useDefaultSettingStore()
  
  return (
    <Box alignContent="center" 
    justifyContent="center" 
    backgroundColor="primaryBlack"
    height={screenHeight}
    width={screenWidth}>
      <LogoScreen width={70} />
      <Text color="primaryWhite"> Hi John, Welcome to Nike. Thanks for becoming a Member!</Text>
    </Box>
  );
};

export default WelcomeScreen;
