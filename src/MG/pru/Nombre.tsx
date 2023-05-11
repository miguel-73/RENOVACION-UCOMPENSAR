import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function Nombre() {
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
            disabled
            id="contained-disabled"
            label="Nombre:*"
            defaultValue="Name" //! Nombre de la persona
          />
        </div>
      </Box>
    </>
  );
}