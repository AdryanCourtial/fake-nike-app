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
      backgroundColor="primaryBlack"
      opacity={1}
      height={10}
      borderRadius="m_6"
      overflow="hidden"
      width="100%">
      <Box height="100%" width={`${progress}%`} backgroundColor="primaryWhite" opacity={1} />
    </Box>
  );
};

export default ProgressBar;
