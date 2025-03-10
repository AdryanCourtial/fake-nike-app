import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface LogoScreenProps {
  width: number;
  height: number;
}

const LogoScreen: React.FC<LogoScreenProps> = ({ width, height }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/nike-logo.png')}
        style={{ width, height }}
        resizeMode="contain"
      />
    </View>
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
