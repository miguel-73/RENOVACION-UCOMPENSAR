import { Box, Typography } from '@mui/material'
import React from 'react'

function EncabezadoDetalles() {
  return (
    <Box 
    sx={{
      position:'relative',
      bgcolor:'rgba(33, 70, 88)',
      borderRadius:6, 
      height:33,
      width:'97%',
      marginTop:2,
      marginLeft:1,
      }}>
      <Typography sx={{position:'relative',fontSize:15,color:'#ffffff', left:20,top:6}}>
        Detalles
      </Typography>
    </Box>
  )
}

export default EncabezadoDetalles
