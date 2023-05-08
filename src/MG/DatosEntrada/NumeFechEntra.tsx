import TextField from '@mui/material/TextField';
export default function CustomizedInputs() {
    return (
        <>
            <div className="App">
                <TextField
                    id="outlined-error"
                    label="Numero Entrada"
                    defaultValue=""
                    required
                />
            </div>
        </>
    );
}