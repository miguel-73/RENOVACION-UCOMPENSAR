import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import EncabezadoDetalles from './components/EncabezadoDetalles'
import {TextInput} from '../../common/TextInput/TextInput'
import {TextInputDisabled} from '../../common/TextInput/TextInput'
import { BotonBusquedaAvanzada } from '../../common/BotonBusquedaAvanzada/BotonBusquedaAvanzada'

function Almacen() {
  return (
    <Box 
    sx={{
        position:'relative',
        left:280,
        maxWidth:'78%',
        border:1,
        borderColor:'grey.500',
        borderRadius:3,
        top:50,
        
        }}>

      <Grid container >
        <Grid item xs={12} sx={{display:'flex'}}>
            <EncabezadoDetalles/>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={2} sx={{display:'flex',marginTop:1,border:1 }}>
          <TextInput id='CodigoBien' text='Codigo del bien:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1,border:1 }}>
          <TextInputDisabled id='NombreArticulo' text='Nombre del artículo:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1,border:1}}>
          <TextInput id='Cantidad' text='Cantidad:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1,border:1}}>
          <TextInput id='Bodega' text='Bodega:*'/>
        </Grid>

      </Grid>

      <Grid container >

        <Grid item xs={2} sx={{display:'flex', marginTop:1}}>
          <TextInput id='PocentajeIva' text='Porcentaje de IVA:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1, }}>
          <TextInputDisabled id='ValorIva' text='Valor de IVA:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1}}>
          <TextInput id='ValorUnidad' text='Valor Unidad:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1 }}>
          <TextInputDisabled id='ValorTotalItem' text='Valor Total Item:*'/>
        </Grid>

      </Grid>

      <Grid container direction='row' justifyContent="flex-end" >

        <Grid item xs={2} sx={{display:'flex', marginTop:1 }}>
          <TextInputDisabled id='ValorTotalEntrada' text='Valor Total Entrada:*'/>
        </Grid>

        <Grid item xs={4} sx={{display:'flex', marginTop:1 }}>
          <BotonBusquedaAvanzada/>
        </Grid>

      </Grid>

      <Grid container >
        <Grid item xs={12}>
          <Typography>
            tabla <br/>
            tabla <br/>
            tabla <br/>
            tabla <br/>
            tabla <br/>
            tabla <br/>
            tabla <br/>
            tabla
          </Typography>
        </Grid>
      </Grid>


    </Box>
  )
}

export default Almacen
