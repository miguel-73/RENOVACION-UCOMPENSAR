import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

export const FileUploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Lógica para subir el archivo
    console.log(selectedFile);
  };

  return (
    <Box component="form" sx={{
      '& .MuiTextField-root': {m: 2, height: "300vh", width: "30ch",},
      height: "10%",
      width: "40%",
      alignItems: "center",
      top: "78.2%",
      left: "56%",
      position: "absolute",
    }}>
      <div>
      <input
        type="file"
        style={{ display: 'none' }}
        id="file-upload"
        onChange={handleFileSelect}
      />
      <label htmlFor="file-upload">
        <Typography variant="" sx={{top: "-122px",}}>
          Anexar documentos de soporte: *
        </Typography>
        <Button variant="outlined" component="span" endIcon={<SearchIcon/>} sx={{
          position: "absolute",
          top: "30%",
          borderRadius: "10px",
          color: "#000000",
          borderColor: "#000000",
          left: "0%",
        }}>
          SELECCIONAR ARCHIVO
        </Button>
      </label>
      <TextField
        label="Nombre del archivo"
        value={selectedFile ? selectedFile.name : ''}
        disabled
        sx={{
          left: "12px",
          height: "12vm",
          top: "9px",
        }}
        inputProps={{
          style: {height: "4px", borderRadius: "10px",}
        }}
      />
      <Button
        variant="contained"
        onClick={handleUpload}
        disabled={!selectedFile}
        color="success"
        endIcon={<SaveIcon/>}
        sx={{
          position: "absolute",
          top: "30%",
          left: "80%",
        }}
      >
        GUARDAR
      </Button>
    </div>
    </Box>
  );
};