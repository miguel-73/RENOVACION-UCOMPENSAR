import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function CodigoBien() {
  return (
    <>
      
        <div>
          <TextField
            required
            id="contained-disabled"
            label="Codigo Del Bien:"
            defaultValue=" " //! Nombre de la persona
          />
        </div>
     
    </>
  );
}