import { Box, Text } from 'theme';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="title">{title}</Text>
      <Box height={1} marginVertical="l_32" width="80%" backgroundColor="primaryBlack" />
      <EditScreenInfo path={path} />
      {children}
    </Box>
  );
};
