import { Box, Grid } from '@mui/material'
import React from 'react'
import EncabezadoDetalles from './components/EncabezadoDetalles'

function Almacen() {
  return (
    <Box 
    sx={{
        position:'relative',
        left:280,
        maxWidth:'78%',
        border:1,
        top:70,
        }}>

      <Grid container>
        <Grid item xs={12} sx={{display:'flex'}}>
            <EncabezadoDetalles/>
        </Grid>

        <Grid item xs={2} sx={{display:''}}>

        </Grid>

      </Grid>
    </Box>
  )
}

export default Almacen
