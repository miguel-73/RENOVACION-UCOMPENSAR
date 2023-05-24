import { IconButton } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Star () {
    return (
        <IconButton>
            <StarBorderIcon sx={{color: "#000000"}} />
        </IconButton>
    )
}
export default Star;