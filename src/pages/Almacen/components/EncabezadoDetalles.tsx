import { Box, Typography } from '@mui/material'
import React from 'react'

function EncabezadoDetalles() {
  return (
    <Box sx={{position:'relative',bgcolor:'rgba(33, 70, 88)', borderRadius:6, height:36, width:'97%'}}>
      <Typography sx={{position:'relative',color:'#ffffff', left:20,top:8}}>
        Detalles
      </Typography>
    </Box>
  )
}

export default EncabezadoDetalles
