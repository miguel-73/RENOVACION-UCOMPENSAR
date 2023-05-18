import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function TextoIdentificacion() {
  return (
    <Box sx={{top:5, border: 1, width: '250PX',  margin:1,      
    height: '60px', }}>
      
      <Typography variant="button" display="block" gutterBottom style={{ fontWeight: "bold" }}>
        identificacion
      </Typography>

      <Typography variant="subtitle1" display="block" gutterBottom>
        11234556789
      </Typography>
      

      
    </Box>
  );
}