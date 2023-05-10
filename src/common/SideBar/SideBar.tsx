import React from 'react'
import { Box, Divider, Grid, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import logo from './assets/logo.jpg'

import SelectAlmacen from './components/SelectAlmacen'
import SelectNombreApellido from './components/SelectNombreApellido'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';

function SideBar() {
  return (
    <div>
      <Box>
      <Box
            sx={{
              bgcolor: "black",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              ml:2
            }}
          >
            <img src={logo} className="logo" alt='logo de la empresa' />
          </Box>
          <Divider />
          <Box>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem>
                  <IconButton></IconButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    
                    <ListItemText primary="Draft" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          </Box>
    </div>
  )
}

export default SideBar
