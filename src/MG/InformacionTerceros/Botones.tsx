import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';

export default function ContainedButtons() {
  
  return (
    <Stack direction="row" spacing={3}>
      <Button variant="outlined" endIcon={<FormatColorResetIcon/>} sx={{
        borderColor: "#144F7A",
      }}>LIMPIAR</Button>
      <Button variant="contained" endIcon={<SearchIcon/>} sx={{
        background: "#144F7A",
      }}>BUSCAR</Button>
      <Button variant="contained" color="error" endIcon={<ClearIcon />}>ANULAR</Button>
      
      <Button variant="contained" color="success" endIcon={<SaveOutlinedIcon />} sx={{
        background: "#27D312",
      }}>GUARDAR</Button>
    </Stack>
  );
}