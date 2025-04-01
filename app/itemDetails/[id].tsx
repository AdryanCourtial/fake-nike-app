/* eslint-disable react-hooks/rules-of-hooks */
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ActionBarItem from '~/components/ItemDetails/ActionBarItem';
import CarouselItemDetails from '~/components/ItemDetails/CarouselItemDetails';
import DeliveryItem from '~/components/ItemDetails/DeliveryItem';
import DescriptionItem from '~/components/ItemDetails/DescriptionItem';
import HeaderItemDetails from '~/components/ItemDetails/HeaderItemDetails';
import SliderInfoItem from '~/components/ItemDetails/SliderInfoItem';
import { useGetOneProduct } from '~/queries/useProductQueries';
import SkeletonItemDetailsScreen from '~/screens/Skeleton/SkeletonItemDetailsScreen';
import { Box } from '~/theme';

export default function itemDetails() {
  const local = useLocalSearchParams();
  const id = Number(local.id);

  const { data, isLoading } = useGetOneProduct(id);
  const [imgChooseDiaporama, setimgChooseDiaporama] = useState<string>('');

  useEffect(() => {
    setimgChooseDiaporama(data?.images[0] ?? '');
  }, [data?.images]);

  return (
    <>
      <Box backgroundColor="primaryWhite">
        <ScrollView>
          <HeaderItemDetails title={data?.title || ""} />

          {!isLoading ? (

          <Box>
            <CarouselItemDetails
            data={data}
            imgChooseDiaporama={imgChooseDiaporama}
            setimgChooseDiaporama={setimgChooseDiaporama}
            />

            <DescriptionItem data={data} />

            <ActionBarItem data={data}/>

            <Box padding="ml_24" gap="ml_24">
              <SliderInfoItem />
              <DeliveryItem />
            </Box>

          </Box>
          ) : <SkeletonItemDetailsScreen />
        }
        </ScrollView>
      </Box>
    </>
  );
}
