import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
const currencies = [
  {
    value: 'CC',
    label: 'Activo Circulante',
  },
  {
    value: 'CE',
    label: 'Activo Fijo',
  },
  {
    value: 'CE',
    label: 'Activo Diferido',
  },
];
export default function TipoActivoTipoActivo() {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {  width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-select-currency"
            select
            label="Tipo De Activo"
            defaultValue="a"
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