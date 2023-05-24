import { Card, Grid } from "@mui/material";
import Entry from "../Typography/LastEntry";

function InfoCardEntry () {
    return (
        // <Card sx={{flexGrow: 1, mt: 1}}>
            <Grid alignItems={"center"} container spacing={1}>
                <Grid alignItems={"center"} xs={12} sm={6} md={2}>
                    <Card sx={{
                        height: "auto",
                        width: "auto",
                        background: "#957878",
                        borderRadius: "12px",
                        position: "right",
                        alignItems: "right",
                        top: "40px",
                        mt: 1,
                    }}>
                        <Entry />
                    </Card>
                </Grid>
            </Grid>
        // </Card>
    )
}
export default InfoCardEntry;