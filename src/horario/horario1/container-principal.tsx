import React from 'react';
import { Box, Grid } from '@mui/material';
import HorarioTabla from './tablahorario';



export default function ContainerPrincipalModal() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid alignItems="center" container spacing={0}>
        <Grid alignItems="center" item xs={12} sm={12} md={12}> 
       
    <Box sx={{
    position: "auto",
    top: 0,
    border: 3,
    backgroundColor:'white',
    borderColor: "#dddddd", 
    width: "auto",      
    height: 490,
    margin:0
   }}>
     {/* <HorarioTabla/> */}
    </Box>
      </Grid>  
        </Grid>
      </Box>
  );
}

