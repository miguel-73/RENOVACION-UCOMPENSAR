import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TextoPrimerNombre() {
  return (
    <Box sx={{ width: '70%', maxWidth: 500 }}>
    
      <Typography variant="body2" sx={{
        position: "absolute",
        top: 110,
        left: 30, 
       
      }}>
       Primer nombre:
      </Typography>

    </Box>
  );
}