import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TextoBusquedaTerceros() {
  return (
    <Box sx={{ width: '70%', maxWidth: 500 }}>
    
      <Typography variant="h4" sx={{
        position: "absolute",
        top: 10,
        left: 20, 
       
      }}>
       Busqueda Terceros
      </Typography>

    </Box>
  );
}