import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "../Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { ToggleDark } from "./components/ToggleDark";
import ToggleNotifications from "./components/ToggleNotifications";

const drawerWidth: string = "20vw";

interface AppBarProps extends MuiAppBarProps {
  openBrowser?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "openBrowser",
})<AppBarProps>(({ theme, openBrowser }) => ({
  marginRight: 8,
  borderRadius: "10px",
  marginTop: 5,
  width: "98.8vw",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openBrowser && {
    width: `calc(100vw - 22vw) !important`,
    marginLeft: `${drawerWidth}px`,
    borderRadius: "10px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Nav() {
  const [darkMode, setDarkMode] = React.useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const [mobile, setMobile] = React.useState(false);

  const [openBrowser, setOpenBrowser] = React.useState(false);

  const [openMobile, setOpenMobile] = React.useState(false);

  const handleDrawerOpenMobile = () => {
    setOpenMobile(!openMobile);
  };

  const handleDrawerOpenBrowser = () => {
    setOpenBrowser(!openBrowser);
  };

  React.useEffect(() => {
    if (window.innerWidth <= 800) {
      // ajusta este valor según tu necesidad
      setMobile(true);
    } else if (window.innerWidth > 800) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ background: "white", height: "10vh" }}
        openBrowser={openBrowser}
      >
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={mobile ? handleDrawerOpenMobile : handleDrawerOpenBrowser}
            edge="start"
            sx={{ mr: 2 }}
            className="MenuIcon"
          >
            <MenuIcon
              sx={{ color: "white", fontSize: "25px" }}
              className="MenuIcon"
            />
          </IconButton>
          <Box sx={{marginLeft:'auto', marginRight:2}}>
          <ToggleDark
          Click={handleDarkModeToggle}
          Mode={darkMode}
          sx={{marginRight:2}}
          />
          </Box>
          <Box >
          <ToggleNotifications/>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        Tipo={mobile ? "temporary" : "persistent"}
        Open={mobile ? openMobile : openBrowser}
        drawerWidth={drawerWidth}
      ></Drawer>
    </Box>
  );
}

export default Nav;