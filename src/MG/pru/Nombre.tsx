import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment } from '@mui/material';

const bodegas = [
  {
    value: 'B1',
    label: 'Bodega 1',
  },
  {
    value: 'B2',
    label: 'Bodega 2',
  },
  {
    value: 'B3',
    label: 'Bodega 3',
  },
]

const currencies = [
  {
    value: 'CC',
    label: 'Cedula de Ciudadania',
  },
  {
    value: 'CE',
    label: 'Cedula Extranjera',
  },

];

export default function Nombre() {
  return (
    <>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch' },
          // position: "absolute",
          top: "64%",
          width: "96%",
          height: "34%"
        }}
        noValidate
        autoComplete="off"
      >

        <div>
          <TextField
            disabled
            id="contained-disabled"
            label="Nombre:*"
            defaultValue="Name" //! Nombre de la persona

          />
        </div>
      </Box>
    </>
  );
}