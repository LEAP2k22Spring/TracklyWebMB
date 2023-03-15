import { Backdrop, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const LoadingSpinner = (open:any ) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position:'absolute',
        opacity:1
      }}
      open={true}
    >
      <Stack>
        <CircularProgress color='inherit' />
      </Stack>
    </Backdrop>
  );
};

export default LoadingSpinner;
