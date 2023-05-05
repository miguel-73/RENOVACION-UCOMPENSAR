import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TextoPrimerApellido() {
  return (
    <Box sx={{ width: '70%', maxWidth: 500 }}>
    
      <Typography variant="body2" sx={{
        position: "absolute",
        top: 100,
        left: 290, 
       
      }}>
       Primer Apellido:
      </Typography>

    </Box>
  );
}