import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pestañas from './pestañas';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1,}}>
      <Grid alignItems="center" container spacing={2}>
        <Grid item xs={12} sm={12}  md={12} >
        <Box sx={{
  position: "auto",
  top: 0,
  border: 2,
  backgroundColor:'white',
  borderColor: "#dddddd", 
  width: 'auto',      
  height: '435px',
  margin:0
 }}>
  <Pestañas/>


  </Box>
          
         
        </Grid>
      </Grid>
    </Box>
  );
}