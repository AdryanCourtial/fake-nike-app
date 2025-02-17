import { Stack, Link } from 'expo-router';

import LogoScreen from './logoscreen';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Container>
        <LogoScreen />
      </Container>
    </>
  );
}
