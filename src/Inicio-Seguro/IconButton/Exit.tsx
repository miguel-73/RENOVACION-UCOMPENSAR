import { IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function ExitButton () {
    return (
        <IconButton sx={{color: "#000000", }}>
            <LogoutIcon/>
        </IconButton>
    )
}