import { Href, Link } from 'expo-router';
import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { Image, Pressable } from 'react-native';
import { Box, Text } from '~/theme';
import { SpacingVariants } from '~/theme/theme';
import MySkeleton from '../SkeletonLoading';
import { windowWidth } from '~/utils/utils';

interface Props {
  id: number;
  srcImage?: string;
  price: number;
  children: string;
  paddingHorizontalDescription?: SpacingVariants
  isLoading: boolean
}

const BoxItem: React.FC<Props> = ({ children, price, srcImage, id, paddingHorizontalDescription, isLoading }) => {
  return (
    <Skeleton.Group show={isLoading}>
      {
      id ? (

      <Link href={('/itemDetails/' + id.toString()) as Href<string>} asChild>
        <Pressable style={{flex: 1}}>
          <Box flex={1} gap="m_20">
            <MySkeleton>
              <Image
                src={srcImage}
                style={{
                  aspectRatio: 1,
                  width: windowWidth / 2,
                }}
                />
            </MySkeleton>
            <Box flex={1} gap="m_16" paddingHorizontal={paddingHorizontalDescription ?? "none"}>
                <Box flex={1}>
                  <MySkeleton>
                    <Text variant="md_bold">{children}</Text>
                  </MySkeleton>
                </Box>
              <MySkeleton>
                <Text variant="md_bold" color="grey600">
                  {price}€
                </Text>
              </MySkeleton>
            </Box>
          </Box>
          </Pressable>
      </Link>
      ) : null
      }
    </Skeleton.Group>
  );
};

export default BoxItem;
