import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: theme.palette.text.secondary,

}));

export default function Nota1() {
  return (
    <Box sx={{ flexGrow: 13, border: 0 }}>
      <Grid container spacing={2} border={0}>
        <Grid item sx={{ display: "inline" }} xs={12} sm={12}>
          <Item style={{
            // overflow: "hidden",
            wordWrap: "break-word",
            fontSize: "14px"
          }}>
            {/* <h5> */}
            43002C
            <div />
            calculo diferencial
            {/* </h5> */}
          </Item>
          <Box my={2} /> {/* Espacio entre los dos items */}
          <Item style={{
            // overflow: "hidden",
            wordWrap: "break-word",
            fontSize: "14px",
          }}>
            <h5>
              63126C
              <div />
              EXTRACCIÓN, TRANSFORMACIÓN Y CARGA DE DATOS
            </h5>
          </Item>
          <Box my={2} /> {/* Espacio entre los dos items */}

          <Item style={{
            // overflow: "hidden",
            wordWrap: "break-word",
            fontSize: "14px"
          }}>
            {/* <h6> */}
            Emotions
            <div />
            Interested, hesitant
            {/* </h6> */}
          </Item>
          <Box my={2} /> {/* Espacio entre los dos items */}
          <Item style={{
            // overflow: "hidden",
            wordWrap: "break-word", fontSize: "14px"
          }}>
            {/* <h6> */}
            243036C
            <div />
            INTERNET DE LAS COSAS
            {/* </h6> */}
          </Item>
          <Box my={2} /> {/* Espacio entre los dos items */}
          <Item style={{
            // overflow: "hidden",
            wordWrap: "break-word",
            fontSize: "14px"
          }}>
            {/* <h6> */}
            123001C
            <div />
            PRÁCTICA I
            {/* </h6>  */}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
