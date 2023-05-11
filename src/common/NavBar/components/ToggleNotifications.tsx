import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import NotificationsIcon from "@mui/icons-material/Notifications";

const ToggleNotifications = () => {
  return (
    <Box>
      <IconButton
            color="inherit"
            aria-label="notifications"
            edge="end"
          >
            <Badge badgeContent={5} color="error">
              <NotificationsIcon sx={{ color: "#BBBEC1", fontSize: 25 }} />
            </Badge>
          </IconButton>
    </Box>
  )
}

export default ToggleNotifications