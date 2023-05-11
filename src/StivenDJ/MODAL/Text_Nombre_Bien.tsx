import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Grid, Box} from '@mui/material';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '' : '#FF0000',
    border: '1px solid ',
    fontSize: 15,
    height:15,
    width: 200,
   
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: [
     
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));




export default function TextNombreBien() {
   

    return (

        <Grid item xs={12} md={6}>
        <Box
     sx={{
    position: "absolute",
    top: 150,
    left: 340, 
    margin:0,
    width: "18%",       //ancho
    height: "30%"}}     //largo
          >


<label htmlFor="username">Nombre del Bien:</label>
<BootstrapInput style={{  borderRadius:7}}   id="bootstrap-input" />



        </Box>
        </Grid>
     

    );
}