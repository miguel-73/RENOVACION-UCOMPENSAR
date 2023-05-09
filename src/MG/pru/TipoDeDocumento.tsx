import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment } from '@mui/material';

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

export default function TipoDeDocumento() {
  return (
    <>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch' },
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
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </>
  );
}