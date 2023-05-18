import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Nota1() {
  return (
    <Box sx={{ flexGrow: 13, border: 0, }}>
      <Grid container spacing={3}
        direction="column"
        justifyContent="space-evenly"
      >
        <Grid item >
          <Item>1</Item>
        </Grid>
        <Grid item >
          <Item>2</Item>
        </Grid>
        <Grid item >
          <Item>3</Item>
        </Grid>
        <Grid item >
          <Item>4</Item>
        </Grid>
        <Grid item >
          <Item>5</Item>
        </Grid>
      </Grid>
    </Box>
  );
}