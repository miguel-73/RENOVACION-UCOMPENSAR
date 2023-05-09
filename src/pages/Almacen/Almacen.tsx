import { Box, Grid } from '@mui/material'
import React from 'react'
import EncabezadoDetalles from './components/EncabezadoDetalles'
import {TextInput} from '../../common/TextInput/TextInput'
import {TextInputDisabled} from '../../common/TextInput/TextInput'
import { BotonBusquedaAvanzada } from '../../common/BotonBusquedaAvanzada/BotonBusquedaAvanzada'
import TableData from './components/DataTable/TableData'

const Almacen = () => {
  return (
    <Box 
    sx={{
        position:'relative',
        left:280,
        
        border:1,
        borderColor:'grey.500',
        borderRadius:3,
        mt:9
        
        
        }}>

      <Grid container >
        <Grid item xs={12} sx={{display:'flex'}}>
            <EncabezadoDetalles/>
        </Grid>
      </Grid>

      <Grid container sx={{marginLeft:1}}>
        <Grid item xs={2} sx={{display:'flex',marginTop:1}}>
          <TextInput id='CodigoBien' text='Codigo del bien:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1 }}>
          <TextInputDisabled id='NombreArticulo' text='Nombre del artículo:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1}}>
          <TextInput id='Cantidad' text='Cantidad:*'/>
        </Grid>

        <Grid item xs={2} sx={{display:'flex', marginTop:1}}>
          <TextInput id='Bodega' text='Bodega:*'/>
        </Grid>

      </Grid>

      <Grid container sx={{marginLeft:1}}>

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

      <Grid container direction='row' justifyContent="flex-end" sx={{marginLeft:1}}>

        <Grid item xs={2} sx={{display:'flex', marginTop:1 }}>
          <TextInputDisabled id='ValorTotalEntrada' text='Valor Total Entrada:*'/>
        </Grid>

        <Grid item xs={4} sx={{display:'flex', marginTop:1 }}>
          <BotonBusquedaAvanzada/>
        </Grid>

      </Grid>

      {/* Espacio para la tabla */}
      <Grid container sx={{border:1, borderColor:'blue'}}>
        <Grid container sx={{m:1, border:1, borderColor:'green'}}>

          <Grid item xs={4}  sx={{border:1,borderColor:'red' ,m:1, display:'flex'}}  >
            <Grid item xs={2} >
              Filtrer
            </Grid>
            <Grid item xs={2}>
              Buscar
            </Grid>
            <Grid item xs={2}>
              Icon
            </Grid>
            <Grid item xs={2}>
              Icon
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{border:1, borderColor:'red'}}>
            <TableData/> 
          </Grid>

        </Grid>
      </Grid>


    </Box>
  )
}

export default Almacen;
