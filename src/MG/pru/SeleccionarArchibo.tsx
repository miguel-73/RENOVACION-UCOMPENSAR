import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment } from '@mui/material';
export default function SeleccionarArchibo() {
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
                    <FormControl sx={{left:32,}}>
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
                            placeholder="SELECCIONAR ARCHIVO"
                        />
                    </FormControl>
                </div>
            </Box>
        </>
    );
}