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

export default function TipoDocumento() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
        position: "absolute",
        top: "64%",
        width: "96%",
        height: "34%"
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField 
          id="outlined-select-currency"
          select
          label="Tipo de documento"
          defaultValue=""
          sx={{
            // position: "absolute",
        
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
      </div>
      <div>
      <FormControl>
        <TextField
            id="outlined-multiline-flexible"
            label="Documento"
            maxRows={4}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                position: "left",
                left: "120%",
                top: "-72px",
              }}
        />
        </FormControl>
      </div>
      <div>
        <TextField 
          id="outlined-select-currency"
          select
          label="Bodega"
          defaultValue=""
          sx={{
            top: "-30px",
        
          }}
        >
          {bodegas.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
      </div>
      <div>
      <TextField
          disabled
          id="outlined-disabled"
          label="Elaborado por.*"
          defaultValue="Nombre"
          sx={{
            position: "absolute",
            top: "114px",
            left: "400px",
          }}
        />
      </div>
      <div>
      <TextField
          disabled
          id="contained-disabled"
          label="Nombre:*"
          defaultValue="Name" //! Nombre de la persona
          sx={{
            position: "absolute",
            top: "0px",
            left: "810px",
          }}
        />
      </div>
    </Box>
  );
}