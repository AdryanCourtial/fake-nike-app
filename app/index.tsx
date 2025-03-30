import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';

import { Container } from '~/components/Container';
import LogoScreen from '~/components/logocomponents';
import SignUpScreen from '~/screens/signupscreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Container>{isLoading ? <LogoScreen width={132} height={47} /> : <SignUpScreen />}</Container>
    </>
  );
}
