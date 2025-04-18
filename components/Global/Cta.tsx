import { Box, Text } from 'theme';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { ColorVariants } from '~/theme/theme';

export type Props = {
    children: string
    backGroundColor?: ColorVariants
    textColor?: ColorVariants
    borderColor?: ColorVariants
    image?: React.ReactNode
    width?: number
    action?: () => void
    positionImage?: "before" | "after"
};

export const Cta: React.FC<Props> = ({ children, action, backGroundColor, borderColor, image, positionImage, textColor, width }) => {

  return (
  <TouchableOpacity
  onPress={action}
  >
    <Box
    flexDirection={positionImage === "before" ? "row-reverse" : "row"}
    backgroundColor={backGroundColor}
    borderStyle={'solid'}
    borderWidth={1}
    borderColor={borderColor} 
    borderRadius={'xxxl_100'} 
    alignContent={'center'} 
    justifyContent={'center'}
    gap={'m_12'}
    paddingVertical={'m_20'}
    width={width ? width : null}
    >
    
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
  </TouchableOpacity>
  );
};
