import { Grid } from "@mui/material";
import OptionsMain from './MainOptions';
import CardS from "../Card/CardS";


function Llamado () {
    return (
        <Grid alignItems={"center"} container spacing={1} justifyContent={"space-between"}>
            <Grid alignItems={"center"} item xs={12} sm={12} md={8}>
                <OptionsMain />
            </Grid>

            <Grid alignItems={"center"} item xs={12} sm={12} md={3}>
                <CardS />
            </Grid>

        </Grid>
    )
}

export default Llamado;