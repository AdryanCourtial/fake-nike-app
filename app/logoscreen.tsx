import React from 'react';
import { View, Image } from 'react-native';

const LogoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/nike-logo.png')}
        style={{ width: 132, height: 47 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default LogoScreen;
