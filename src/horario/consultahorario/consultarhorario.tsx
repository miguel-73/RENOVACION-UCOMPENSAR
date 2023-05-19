import React from "react";
import { AppBar, Toolbar, Typography, Grid, Box } from "@mui/material";
import PrincipalGrid from "./gridprincipal";
import BontonContinuarHorario from "../horario1/botonmodal";

export default function ConsultarHorario() {
  return (
    <Grid alignItems="center" container spacing={0}>
      <Grid item xs={12} sm={12} md={12}>
        <Box
          sx={{
            position: "auto",
            border: 4,
            backgroundColor: "white",
            borderColor: "#dddddd",
            margin: 2,
            height: "400px",
          }} //largo
        >
          <AppBar position="static" sx={{ backgroundColor: "#C0C0C0" }}>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
              >
                Consultar Horario Estudiante
              </Typography>
            </Toolbar>
          </AppBar>
          <Box p={2}>
            <PrincipalGrid />
          </Box>
          <BontonContinuarHorario />
        </Box>
      </Grid>
    </Grid>
  );
}
