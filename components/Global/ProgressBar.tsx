import React from 'react';

import { Box } from '~/theme';

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentValue, maxValue }) => {
  const progress = (currentValue / maxValue) * 100;

  return (
    <Box
      backgroundColor="grey700"
      height={4}
      borderRadius="m_6"
      overflow="hidden"
      width={190}>
      <Box height="100%" width={`${progress}%`} backgroundColor="primaryWhite" />
    </Box>
  );
};

export default ProgressBar;
