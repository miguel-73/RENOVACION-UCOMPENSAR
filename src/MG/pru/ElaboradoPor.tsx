import TextField from '@mui/material/TextField';
export default function ElaboradoPor() {
    return (
        <>
            <div>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Elaborado por.*"
                    defaultValue="Nombre"
                    sx={{
                        // position: "absolute",
                        top: -8,
                        left: 18,
                        width: "185px",
                        
                    }}
                />
            </div>
        </>
    );
}