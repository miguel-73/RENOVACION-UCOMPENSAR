import React from "react";
import Drawer from "@mui/material/Drawer";
import SideBar from "../SideBar/SideBar";

function DrawerT(props: any) {
  return (
    <div>
      <Drawer
        variant={props.Tipo}
        sx={{
          "& .MuiDrawer-paper": {
            width: props.drawerWidth,
            boxSizing: "border-box",
            border: 0,
          },
        }}
        anchor="left"
        open={props.Open}
      >
        <SideBar/>
      </Drawer>
    </div>
  );
}

export default DrawerT;
