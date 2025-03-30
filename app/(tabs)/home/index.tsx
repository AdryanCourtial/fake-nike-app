import { Image, ScrollView } from 'react-native';

import BoxItem from '../../../components/Home/BoxItem';

import usePixelDensity from '~/hook/usePixelDensity';
import { Product } from '~/interface/products.interface';
import { useShoesProductQuery } from '~/queries/useProductQueries';
import { Box, Text } from '~/theme';

const HomeScreen = () => {
  const PixelDensity = usePixelDensity();
  PixelDensity.getPixelDensity();

  const { data, isLoading, error } = useShoesProductQuery();

  if (isLoading) return <Text>Chargement...</Text>;
  if (error) return <Text>Erreur : {error.message}</Text>;

  return (
    <Box backgroundColor="primaryWhite">
      <ScrollView contentContainerStyle={{ padding: 0 }}>
        <Box justifyContent="center" paddingHorizontal="ml_24" alignItems="flex-start" height={200}>
          <Text variant="display_xl_medium"> Discover </Text>
          <Text variant="xxl_regular" color="grey600">
            {' '}
            Tuesday, 3 May{' '}
          </Text>
        </Box>
        <Image
          source={require('../../../assets/homeImage1.png')}
          style={{
            width: '100%',
            height: 550,
            resizeMode: 'cover',
          }}
        />
        <Box>
          <Box paddingHorizontal="ml_24" paddingTop="l_40">
            <Text variant="xxl_medium" marginBottom="m_12">
              {' '}
              What’s new{' '}
            </Text>
            <Text variant="display_xl_medium" color="grey600">
              The latest arrivals from Nike
            </Text>
          </Box>
          <Box>
            <ScrollView horizontal>
              {data.map((value: Product) => (
                <BoxItem
                  id={value.id}
                  price={value.price}
                  widgth={200}
                  srcImage={value.images[0]}
                  key={value.id}>
                  {value.title}
                </BoxItem>
              ))}

              {/* <BoxItem id="1" price="185" widgth={200}>
                Air Jordan XXXVI
              </BoxItem>
              <BoxItem id="2" price="185" widgth={200}>
                Air Jordan XXXVI
              </BoxItem> */}
            </ScrollView>
          </Box>
        </Box>
        <Image
          source={require('../../../assets/imageHome2.png')}
          style={{
            width: '100%',
            height: 380,
            resizeMode: 'cover',
          }}
        />
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
