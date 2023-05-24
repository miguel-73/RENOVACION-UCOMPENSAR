import { IconButton } from "@mui/material";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function WelfareIcon () {
    return (
        <IconButton sx={{color: "#000000",
        background: "radial-gradient(circle, rgba(218,251,63,1) 32%, rgba(255,179,0,1) 57%, rgba(228,86,24,1) 83%);",}}>
            <VolunteerActivismIcon />
        </IconButton>
    )
}