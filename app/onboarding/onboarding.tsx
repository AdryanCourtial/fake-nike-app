import LogoScreen from '~/components/logocomponents';
import { Box, Text } from '~/theme';

const OnBoardingView = () => {
  return (
    <Box flex={1} alignContent="center" justifyContent="center" backgroundColor="primaryBlack">
      <LogoScreen width={70} height={24} />
      <Text color="primaryWhite"> Hi John, Welcome to Nike. Thanks for becoming a Member!</Text>
    </Box>
  );
};

export default OnBoardingView;
