import { Href, Link } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';

import { Box, Text } from '~/theme';

interface Props {
  id: number;
  srcImage?: string;
  widgth: number;
  price: number;
  children: string;
}

const BoxItem: React.FC<Props> = ({ widgth, children, price, srcImage, id }) => {
  return (
    <Link href={('/itemDetails/' + id.toString()) as Href<string>}>
      <Box width={315} flex={1} flexDirection="column" padding="ml_24" gap="m_20">
        <Image
          src={srcImage}
          style={{
            aspectRatio: 1 / 1,
            width: '100%',
          }}
          // Pourquoi lorsque mon image deviens un source / src alors les tailles ne sont pas bonne ?
        />
        <Box flex={1} flexDirection="column" gap="m_16">
          <Text variant="md_bold">{children}</Text>
          <Text variant="md_bold" color="grey600">
            {price}€
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default BoxItem;
