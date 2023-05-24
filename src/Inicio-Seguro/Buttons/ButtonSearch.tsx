import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

export default function SearchButton () {
    return (
        <Button variant='contained' endIcon={<SearchIcon />} color='warning' 
        sx={{
            color: "#000000", 
            background: "#ffffff",
            height: "20px",}}>
            Ver Mas 
        </Button>
    )
}