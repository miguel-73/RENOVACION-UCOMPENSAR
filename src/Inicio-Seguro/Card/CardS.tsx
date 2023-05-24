import { Card, Grid } from "@mui/material";
import Favori from "../Box/Favorite";


function CardS () {
    return (
        <Card sx={{background: "#e06200", borderRadius: "12px", position: "auto", boxShadow: 10}}>
            <Grid alignItems={"center"} container spacing={0}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={12}>
                    <Favori />
                </Grid>
            </Grid>
        </Card>
    )
}
export default CardS;
