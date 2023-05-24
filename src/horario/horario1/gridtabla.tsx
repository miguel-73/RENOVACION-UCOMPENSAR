import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '' : '#B77EB6',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  borderRadius:8,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '96%', marginTop:1, border:0, marginLeft:3}}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} >
          <Item style={{ backgroundColor:'#FF9142', borderRadius:8, fontWeight: "bold" }}>HORARIO</Item>
        </Grid>
        <Grid item xs={2} >
          <Item style={{backgroundColor:'#BDD6D5'}}>MATERIA</Item>
        </Grid>
        <Grid item xs={2} >
          <Item style={{backgroundColor:'#BDD6D5'}}>LUNES</Item>
        </Grid>
        <Grid item xs={2} >
          <Item style={{backgroundColor:'#BDD6D5'}}>MARTES</Item>
        </Grid>
        <Grid item xs={2} >
          <Item style={{backgroundColor:'#BDD6D5'}}>MIERCOLES</Item>
        </Grid>
        <Grid item xs={2} >
          <Item style={{backgroundColor:'#BDD6D5'}}>JUEVES</Item>
        </Grid>
        <Grid item xs={2} >
          <Item style={{backgroundColor:'#BDD6D5'}}>VIERNES</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>Switching And Routing</Item>
        </Grid>
        <Grid item xs={2} >
          <Item> 6 a 7 salon(B2)</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>6 a 8 sala-teleco</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>Extraccion De Datos</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>7 a 8 sala-sistemas</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>8 a 10 sala-sistemas</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>Calculo Diferencial</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>8 a 10 salon(21)</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>9 a 10 salon(20)</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>Internet Las Cosas</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>7 a 10 laboratorio</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
        <Grid item xs={2} >
          <Item>n/a</Item>
        </Grid>
      </Grid>
    </Box>
  );
}