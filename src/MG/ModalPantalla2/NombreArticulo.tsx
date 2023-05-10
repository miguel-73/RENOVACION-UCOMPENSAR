import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function NombreArticulo() {
    return (
        <>
            <TextField
            required
                id="contained-disabled"
                label="Nombre Del Articulo:"
                defaultValue=" " //! Nombre de la persona
                sx={{
                    // top: -55,
                    // left: "21%",
                    // width: "185px",
                }}
            />
        </>
    );
}