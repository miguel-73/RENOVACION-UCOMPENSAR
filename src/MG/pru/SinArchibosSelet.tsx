import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SinArchibosSelet() {
    return (
        <Stack direction="row" spacing={2}>
            <Button sx={{top:-9,}}variant="contained" disabled>
                SIN ARCHIBOS SELECCIONADOS
            </Button>
        </Stack>
    );
}