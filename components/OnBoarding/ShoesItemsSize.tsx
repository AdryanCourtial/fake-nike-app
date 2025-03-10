import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { useDefaultSettingStore } from '~/stores/defaultSetting';
import { Box, Text } from '~/theme';

interface Props {
    children: ReactNode
    index: number
    chooseSize: (index: number) => void
    size: number| null
    width: number
    height: number
}

export const ShoesItemSize: React.FC<Props> = ({ children, index, chooseSize, size, height, width }) => {

  return (
    <Pressable
    onPress={() => chooseSize(index)}>
        <Box
        backgroundColor={ size === index ? 'primaryWhite' : 'grey800'}
        width={width}
        height={height}
        borderRadius={"m_6"}
        justifyContent={'center'}
        alignItems={'center'}
        >
            <Text color={ size === index ? 'primaryBlack' : 'primaryWhite'} variant={"xl_medium"}>{children}</Text>
        </Box>
    </Pressable>
  );
}
