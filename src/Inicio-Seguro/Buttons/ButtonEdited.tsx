import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function Edited () {
    return (
        <Button variant="contained" color="warning" endIcon={<EditIcon/>} sx={{
            color: "#000000",
            background: "#f66d09",
            borderRadius: "20px",}}>
            Editar
        </Button>
    )
}
export default Edited;