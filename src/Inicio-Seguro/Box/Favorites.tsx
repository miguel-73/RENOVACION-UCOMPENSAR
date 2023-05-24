import { Box, Grid } from "@mui/material";
import SearchButton from '../Buttons/ButtonSearch';

function Favorite () {
    return (
        <Box sx={{flexGrow: 1,}}>
            <Grid alignItems={"center"} container spacing={0} >
                <Grid alignItems={"center"} item xs={0} sm={0} md={2}>
                    <Box sx={{ border: 1,
                        background: "#e45618",
                        width: "auto",
                        height: "auto",
                        position: "auto",
                        borderRadius: "12px"}}>
                            <SearchButton />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Favorite;