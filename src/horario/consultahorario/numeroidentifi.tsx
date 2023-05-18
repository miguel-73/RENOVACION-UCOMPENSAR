import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function TextoNumeroIdentificacion() {
  return (
    <Box sx={{ border: 2, width: '300PX',  margin:1,      
    height: 'auto', }}>
      
      <Typography variant="button" display="block" gutterBottom>
        1123456679
      </Typography>
      
    </Box>
  );
}