import { Backdrop, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const LoadingSpinner = (open:any ) => {
  return (
    <Backdrop
      sx={{
        color: '#000',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <Stack>
        <CircularProgress color='inherit' />
      </Stack>
    </Backdrop>
  );
};

export default LoadingSpinner;
