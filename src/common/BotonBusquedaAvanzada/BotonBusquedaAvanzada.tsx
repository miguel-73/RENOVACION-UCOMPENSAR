import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Button, Icon, Typography } from '@mui/material'

export const BotonBusquedaAvanzada = () => {
  return (
    <>
        <Button variant='contained' sx={{height:30,width:158,marginTop:2.5,marginLeft:3,bgcolor:'rgba(33, 70, 88)'}}>
            <Icon sx={{position:'relative',left:110,bottom:2,}}>
                <SearchIcon sx={{fontSize:16}} />
            </Icon>
            <Typography sx={{position:'relative',fontSize:9.5, right:25,top:1}}>
                BUSQUEDA AVANZADA
            </Typography>
        </Button>
    </>
  )
}


