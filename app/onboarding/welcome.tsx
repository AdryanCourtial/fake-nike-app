import { LinearGradientA22 } from '~/components/Global/Gradient/LinearGradientA22';
import LogoScreen from '~/components/logocomponents';
import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box, Text } from '~/theme';

const WelcomeScreen = () => {

    const { screenHeight, screenWidth } = useDefaultSettingStore()
  
  return (
    <Box>
      <Box
      alignContent="center" 
      justifyContent="center" 
      backgroundColor="primaryBlack"
      height={screenHeight}
      width={screenWidth}
      gap={'m_20'}
      padding={'m_20'}
      zIndex={2}
      elevation={2}>
        <LogoScreen width={70} height={50}/>
        <Text color="primaryWhite" variant={"display_xl_medium"}>{'Hi John,\nWelcome to Nike.\nThanks for becoming\na Member!'}</Text>
      </Box>
        <LinearGradientA22 indexZ={1} />
    </Box>
  );
};

export default WelcomeScreen;
