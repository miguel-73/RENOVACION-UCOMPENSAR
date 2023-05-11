import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
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
export default function Bodega() {
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
            id="outlined-select-currency"
            select
            label="Bodega"
            defaultValue=""
          >
            {bodegas.map((option) => (
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