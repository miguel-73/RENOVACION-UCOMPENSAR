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
      <Grid container spacing={2} border={0}>
        <Grid item sx={{ display: "inline" }} xs={12} sm={12}>
          <Item style={{
            // overflow: "hidden",
            wordWrap: "break-word"
          }}>

            miguelangelmurciaocampo73@gmail.com

          </Item>
          <Item style={{
            // overflow: "hidden",
            wordWrap: "break-word"
          }}>

            miguelangelmurciaocampo73@gmail.com

          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}