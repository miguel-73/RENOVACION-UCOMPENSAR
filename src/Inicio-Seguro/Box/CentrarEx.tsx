import { Grid } from "@mui/material";
import ExitButton from '../IconButton/Exit';
import Question from '../IconButton/Question';
import OptionsX from '../IconButton/Options';

function Centrar () {
    return (
        <Grid alignItems={"center"} container spacing={0} justifyContent={"space-evenly"}>
            <ExitButton />
            <Question />
            <OptionsX />
        </Grid>
    )
}
export default Centrar;