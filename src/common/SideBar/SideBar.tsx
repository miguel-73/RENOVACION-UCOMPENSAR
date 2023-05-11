import React from 'react'
import { Box, Grid } from '@mui/material'
import logo from './assets/logo.jpg'

import SelectAlmacen from './components/SelectAlmacen'
import SelectNombreApellido from './components/SelectNombreApellido'

function SideBar() {
  return (
    <Box
    sx={{
        width: 230,
        height: 580,
        marginLeft: 2,
        marginTop: 2,
        border: 1,
        borderColor: "grey.500",
        position:'relative',
      }}>


        <header>
            <img src={logo} width="100%" />
        </header>

    <Grid container>
        
        <Grid item xs={12} sx={{display:'flex', marginTop:3}} >
            <SelectNombreApellido/>
        </Grid>

    
        <Grid item xs={8} sx={{display:'flex'}} >
            <SelectAlmacen/>
        </Grid>



    </Grid>
    </Box>
  )
}

export default SideBar
