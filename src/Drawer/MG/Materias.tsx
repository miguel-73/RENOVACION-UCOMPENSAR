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
      <Grid container spacing={2} border={0} >
        
        <Grid item sx={{ display: "inline" }} xs={12} sm={12}>
          <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} >

              <Grid item xs={6} sm={6} >
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                  43002C
                </Item>
              </Grid>

              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                  calculo diferencial
                </Item>
              </Grid>

            </Grid>
          </Box>
          <Box my={3} /> {/* Espacio entre los dos items */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                  63126C
                </Item>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                  CARGA DE DATOS
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box my={3} /> {/* Espacio entre los dos items */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                243036C
                </Item>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                INTERNET DE LAS COSAS
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box my={3} /> {/* Espacio entre los dos items */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                  243036C
                </Item>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                PRÁCTICA I
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box my={3} /> {/* Espacio entre los dos items */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                  123001C
                </Item>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Item style={{ wordWrap: "break-word", fontSize: "14px" }}>
                SWITCHING AND ROUTING
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}





