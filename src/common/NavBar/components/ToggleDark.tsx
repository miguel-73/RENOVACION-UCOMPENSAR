import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

export const ToggleDark = (props:any) => {
  return (
    <Box>
      <IconButton
            color="inherit"
            aria-label="toggle-Dark"
            edge="end"
            
            onClick={props.Click}
            className="toggle-button"
          >
            {props.Mode ? (
              <Brightness5OutlinedIcon sx={{ color: "#BBBEC1" }} />
            ) : (
              <BedtimeOutlinedIcon sx={{ color: "#BBBEC1" }} />
            )}
          </IconButton>
          
    </Box>
  )
}
