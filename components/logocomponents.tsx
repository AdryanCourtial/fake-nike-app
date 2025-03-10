import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Box } from '~/theme';

interface LogoScreenProps {
  width: number;
  // height: number;
}

const LogoScreen: React.FC<LogoScreenProps> = ({ width }) => {
  return (
    <Box justifyContent='center' alignItems='center'>
      <Image
        source={require('../assets/nike-logo.png')}
        style={{ width }}
        resizeMode="contain"
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoScreen;
