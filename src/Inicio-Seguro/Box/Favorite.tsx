import { Box, Grid} from '@mui/material';
import Expo from './Content';

function Favori () {
    return (
        
            <Grid alignItems={"center"} container spacing={0} justifyContent={"space-between"}>
                <Grid alignItems={"center"} item xs={12} sm={12} md={12}>
                    <Box sx={{border: 1, position: "auto", width: "auto", height: "auto",}}>
                        <Grid alignItems={"center"} item xs={10} sm={9} md={10}>
                            <Expo />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

    )
}
export default Favori;