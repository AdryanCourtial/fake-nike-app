/* eslint-disable react-hooks/rules-of-hooks */
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView } from 'react-native';

import CarretDownSvgIcon from '~/assets/CarretDownSvgIcon';
import HeartStraightSvgIcon from '~/assets/HeartStraightSvgIcon';
import { Cta } from '~/components/Global/Cta';
import { useGetOneProduct } from '~/queries/useProductQueries';
import { Box, Text } from '~/theme';

export default function itemDetails() {
  const local = useLocalSearchParams();
  const id = Number(local.id);

  const { data, isLoading, error } = useGetOneProduct(id);

  if (isLoading) return <Text>Chargement...</Text>;
  if (error) return <Text>Erreur : {error.message}</Text>;

  useEffect(() => {
    setimgChooseDiaporama(data?.images[0] ?? '');
  }, [data?.images]);

  const [imgChooseDiaporama, setimgChooseDiaporama] = useState<string>('');

  return (
    <>
      <Box backgroundColor="primaryWhite">
        <ScrollView>
          <Box>
            <Image
              src={imgChooseDiaporama}
              style={{
                width: '100%',
                height: 465,
                marginBottom: 2,
              }}
            />
            <ScrollView
              horizontal
              style={{
                gap: 4,
              }}>
              <Box width="auto" height={160} flex={1} flexDirection="row" gap="xs_2">
                {data?.images.map((value) => (
                  <Pressable onPress={() => setimgChooseDiaporama(value)}>
                    <Image
                      src={value}
                      style={{
                        aspectRatio: 1 / 1,
                        height: 160,
                        width: 160,
                        resizeMode: 'cover',
                      }}
                    />
                  </Pressable>
                ))}
              </Box>
            </ScrollView>
            <Box marginHorizontal="ml_24" marginVertical="l_35" height="auto" gap="l_32">
              <Box gap="m_16">
                <Box gap="s_6">
                  <Text variant="xxl_regular" color="primaryBlack">
                    {data?.category.name}
                  </Text>
                  <Text variant="display_xl_medium" color="primaryBlack">
                    {data?.title}
                  </Text>
                </Box>
                <Box>
                  <Text variant="xxl_medium" color="primaryBlack">
                    {'US$' + data?.price}
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text variant="lg_regular" color="primaryBlack">
                  {data?.description +
                    '\n\n     •  rShown: Multi-Color \n     •  Style: SX6897-965'}
                </Text>
              </Box>

              <Box>
                <Text variant="lg_regular" color="grey600">
                  View Product Details
                </Text>
              </Box>
            </Box>

            <Box paddingHorizontal="ml_24" paddingVertical="l_32" gap="m_20">
              <Cta borderColor="grey200" image={<CarretDownSvgIcon />}>
                Select Size
              </Cta>

              <Cta
                backGroundColor="primaryBlack"
                borderColor="primaryBlack"
                textColor="primaryWhite">
                Add to Bag
              </Cta>

              <Cta borderColor="grey200" image={<HeartStraightSvgIcon />}>
                Favourite
              </Cta>
            </Box>
            <Box padding="ml_24" gap="ml_24">
              <Box
                paddingHorizontal="m_20"
                paddingVertical="m_18"
                backgroundColor="grey100"
                borderRadius="m_8">
                <Text variant="xl_medium" color="primaryBlack">
                  Get Your Gear Faster
                </Text>
                <Text variant="lg_regular" color="primaryBlack">
                  Look for store pick up at checkout.
                </Text>
                <Box gap="xs_4" flexDirection="row" marginTop="ml_28">
                  <Box height={2} width={12} backgroundColor="grey300" />
                  <Box height={2} width={12} backgroundColor="grey300" />
                  <Box height={2} width={12} backgroundColor="primaryBlack" />
                </Box>
              </Box>
              <Box>
                <Text variant="xl_medium">Delivery</Text>
                <Text variant="xxl_regular">Arrives Wed, 11 May</Text>
                <Box flexDirection="row" gap="sm_8">
                  <Text variant="xxl_regular">to Fri, 13 May</Text>
                  <Text variant="xl_medium" textDecorationLine="underline">
                    Edit Location
                  </Text>
                </Box>
              </Box>
              <Box gap="sm_8">
                <Text variant="xl_medium">PIck-Up</Text>
                <Text variant="xl_medium" textDecorationLine="underline">
                  Find a Store
                </Text>
              </Box>
            </Box>
          </Box>
          <Text> {data?.id} </Text>
        </ScrollView>
      </Box>
    </>
  );
}
