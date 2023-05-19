import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { number } from 'yargs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Nota1() {

  const nota1:number=110;

  return (
    <Box sx={{ flexGrow: 13, border: 0, }}>
      <Grid container spacing={3}
        direction="column"
        justifyContent="space-evenly"
      >
        {/* varible  */}
        <Grid item >
          <Item> {nota1} </Item>
        </Grid>
        <Grid item >
          <Item>20</Item>
        </Grid>
        <Grid item >
          <Item>30</Item>
        </Grid>
        <Grid item >
          <Item>40</Item>
        </Grid>
        <Grid item >
          <Item>50</Item>
        </Grid>
      </Grid>
    </Box>
  );
}