import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const HorarioTabla: React.FC = () => {
  const horario = [
    {
      hora: "08:00",
      lunes: "Clase 1",
      martes: "Clase 2",
      miercoles: "Clase 3",
      jueves: "Clase 4",
      viernes: "Clase 5",
    },
    {
      hora: "09:00",
      lunes: "Clase 6",
      martes: "Clase 7",
      miercoles: "Clase 8",
      jueves: "Clase 9",
      viernes: "Clase 10",
    },
    // Agrega más filas de horario según necesites
  ];

  return (
    <Grid container spacing={1}>
      {/* Encabezados de días */}
      <Grid item xs={2}>
        <Paper>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Hora
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Lunes
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Martes
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Miércoles
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Jueves
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Viernes
          </Typography>
        </Paper>
      </Grid>

      {/* Filas de horario */}
      {horario.map((fila) => (
        <React.Fragment key={fila.hora}>
          <Grid item xs={2}>
            <Paper>
              <Typography variant="body1" align="center">
                {fila.hora}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <Typography variant="body1" align="center">
                {fila.lunes}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <Typography variant="body1" align="center">
                {fila.martes}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <Typography variant="body1" align="center">
                {fila.miercoles}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <Typography variant="body1" align="center">
                {fila.jueves}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <Typography variant="body1" align="center">
                {fila.viernes}
              </Typography>
            </Paper>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default HorarioTabla;
