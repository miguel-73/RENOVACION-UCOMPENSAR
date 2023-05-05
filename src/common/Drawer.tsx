import React from "react";
import Drawer from "@mui/material/Drawer";

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
      ></Drawer>
    </div>
  );
}

export default DrawerT;
