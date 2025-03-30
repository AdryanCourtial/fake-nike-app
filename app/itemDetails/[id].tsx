/* eslint-disable react-hooks/rules-of-hooks */
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView } from 'react-native';

import CarretDownSvgIcon from '~/assets/CarretDownSvgIcon';
import HeartStraightSvgIcon from '~/assets/HeartStraightSvgIcon';
import { Cta } from '~/components/Global/Cta';
import { Product } from '~/interface/products.interface';
import { useGetOneProduct } from '~/queries/useProductQueries';
import { Box, Text } from '~/theme';

export default function itemDetails() {
  const local = useLocalSearchParams();
  const id = Number(local.id);

  const { data, isLoading, error } = useGetOneProduct(id);

  console.log(data);

  if (isLoading) return <Text>Chargement...</Text>;
  if (error) return <Text>Erreur : {error.message}</Text>;

  return (
    <>
      <Box backgroundColor="primaryWhite">
        <ScrollView>
          <Box>
            <Image
              source={require('../../assets/homeImage1.png')}
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
                <Image
                  source={require('../../assets/homeImage1.png')}
                  style={{
                    aspectRatio: 1 / 1,
                    height: 160,
                    width: 160,
                    resizeMode: 'cover',
                  }}
                />
                <Image
                  source={require('../../assets/homeImage1.png')}
                  style={{
                    aspectRatio: 1 / 1,
                    height: 160,
                    width: 160,
                    resizeMode: 'cover',
                  }}
                />

                <Image
                  source={require('../../assets/homeImage1.png')}
                  style={{
                    aspectRatio: 1 / 1,
                    height: 160,
                    width: 160,
                    resizeMode: 'cover',
                  }}
                />
              </Box>
            </ScrollView>
            <Box marginHorizontal="ml_24" marginVertical="l_35" height="auto" gap="l_32">
              <Box gap="m_16">
                <Box gap="s_6">
                  <Text variant="xxl_regular" color="primaryBlack">
                    Training Crew Socks
                  </Text>
                  <Text variant="display_xl_medium" color="primaryBlack">
                    Nike Everyday Plus Cushioned
                  </Text>
                </Box>
                <Box>
                  <Text variant="xxl_medium" color="primaryBlack">
                    US$10
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text variant="lg_regular" color="primaryBlack">
                  {
                    'The Nike Everyday Plus Cushioned Socks bring comfort to your workout with extra cushioning under the heel and forefoot and a snug, supportive arch band. Sweat-wicking power and breathability up top help keep your feet dry and cool to help push you through that extra set.\n\n     •  rShown: Multi-Color \n     •  Style: SX6897-965'
                  }
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
          <Text> {(data as Product).id} </Text>
        </ScrollView>
      </Box>
    </>
  );
}
