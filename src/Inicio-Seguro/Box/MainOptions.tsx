import { Box, Grid } from "@mui/material"
import Grad from "../IconButton/StudentAcademy"
import AcademicoEstudiante from "../Typography/Academy";
import Teacher from "../IconButton/TeacherEvalues";
import TeacherSub from "../Typography/Teacher";
import WelfareIcon from "../IconButton/Welfare";
import WelfareTypo from "../Typography/Welfare";
import SACC from "../IconButton/Sacc";
import SaccTypography from '../Typography/SaccTypo';
import SaccNotify from "../IconButton/SaccNotify";
import SaccNotifyTypography from "../Typography/SaccNotify";
import Graduate from "../IconButton/Graduation";
import GraduateTypography from '../Typography/Graduation';


function OptionsMain () {
    return (
        <Box sx={{flexGrow: 1, mt: 2, borderRadius: "12px", background: "#e06200", boxShadow: 12}}>
            <Grid alignItems={"center"} direction={"row"} container spacing={1} justifyContent={"space-around"}>
                <Grid alignItems={"center"} item xs={4} sm={3} md={1}>
                    <Box sx={{
                        position: "auto",
                        width: "auto",
                        height: "auto",
                        margin: 0,
                    }}>
                        <Grad />
                        <AcademicoEstudiante/>
                    </Box>
                </Grid>
                
                <Grid alignItems={"center"} item xs={3} sm={4} md={1}>
                    <Box sx={{
                        position: "auto",
                        width: "auto",
                        height: "auto",
                        margin: 0,
                    }}>
                        <Teacher />
                        <TeacherSub/>
                    </Box>
                </Grid>

                <Grid alignItems={"center"} item xs={3} sm={3} md={1}>
                    <Box sx={{
                        position: "auto",
                        width: "auto",
                        height: "auto",
                        margin: 0,
                    }}>
                        <WelfareIcon />
                        <WelfareTypo/>
                    </Box>
                </Grid>

                <Grid alignItems={"center"} item xs={4} sm={3} md={1}>
                    <Box sx={{
                        position: "auto",
                        width: "auto",
                        height: "auto",
                        margin: 0,
                    }}>
                        <SACC />
                        <SaccTypography />
                    </Box>
                </Grid>

                <Grid alignItems={"center"} item xs={3} sm={4} md={1}>
                    <Box sx={{
                        position: "auto",
                        width: "auto",
                        height: "auto",
                        margin: 0,
                    }}>
                        <SaccNotify />
                        <SaccNotifyTypography />
                    </Box>
                </Grid>

                <Grid alignItems={"center"} item xs={3} sm={3} md={1}>
                    <Box sx={{
                        position: "auto",
                        width: "auto",
                        height: "auto",
                        margin: 0,
                    }}>
                        <Graduate />
                        <GraduateTypography />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default OptionsMain;