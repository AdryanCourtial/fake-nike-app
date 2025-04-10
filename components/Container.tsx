import { Box } from 'theme';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      flex={1}
      padding="ml_24"
      backgroundColor="primaryBlack"
      alignItems="center"
      justifyContent="center">
      {children}
    </Box>
  );
};
