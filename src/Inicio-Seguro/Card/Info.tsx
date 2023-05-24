import { Card,} from "@mui/material";
import Information from '../Typography/Advertisement';

function InfoCard () {
    return (
        <Card sx={{
                height: "auto",
                width: "auto",
                background: "#a9a395",
                borderRadius: "12px",
                top: "30px",
                position: "right",        
                boxShadow: 3,       
                }}>
            <Information />
        </Card>
    )
}
export default InfoCard;