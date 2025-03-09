import { Box, Text } from 'theme';
import { Pressable } from 'react-native';
import React from 'react';
import { ColorVariants } from '~/theme/theme';
import CarretDownSvgIcon from '~/assets/CarretDownSvgIcon';

export type Props = {
    children: string
    backGroundColor?: ColorVariants
    textColor?: ColorVariants
    borderColor?: ColorVariants
    image?: React.ReactNode
    action?: () => void
    positionImage?: "before" | "after"
};

export const Cta: React.FC<Props> = ({ children, action, backGroundColor, borderColor, image, positionImage, textColor }) => {

  return (
  <Pressable
  onPress={action}>
    <Box
    flexDirection={positionImage === "before" ? "row-reverse" : "row"}
    backgroundColor={backGroundColor}
    borderStyle={'solid'}
    borderWidth={1}
    borderColor={borderColor} 
    borderRadius={'rounded'} 
    alignContent={'center'} 
    justifyContent={'center'}
    gap={'m_12'}
    paddingVertical={'m_20'}>
    
      <Text 
      textAlign={"center"} 
      variant={'xl_medium'} 
      color={textColor}
      >
      {children} </Text>

      {
        image ?? (
          image
        )
      }
    </Box>
  </Pressable>
  );
};
