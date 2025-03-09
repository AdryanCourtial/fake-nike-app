import { Stack, Link, useRouter } from 'expo-router';
import { useEffect } from 'react';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { Text } from '~/theme';

export default function Home() {

  const router = useRouter()

  return (
    <>
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Text variant='body'> SAlut JE SUIS LE TEST DE LA FONT JEN AI MARRE</Text>
        <Link href="/(tabs)/bag" asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  );
}
