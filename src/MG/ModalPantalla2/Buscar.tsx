import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';

export default function Buscar() {
  
  return (
    <Stack direction="row" spacing={3}>
      <Button variant="contained" endIcon={<SearchIcon/>} sx={{
        background: "#144F7A",
      }}>BUSCAR</Button>
    </Stack>
  );
}