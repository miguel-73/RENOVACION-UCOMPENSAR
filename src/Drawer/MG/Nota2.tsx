import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Nota2() {
  return (
    <Box sx={{ flexGrow: 13, border: 0, }}>
      <Grid
        container spacing={3}
        // container
        direction="column"
        justifyContent="space-evenly"
      // alignItems="flex-start"
      >
        <Grid item >
          <Item>10</Item>
        </Grid>
        <Grid item >
          <Item>20</Item>
        </Grid>
        <Grid item >
          <Item>30</Item>
        </Grid>
        <Grid item >
          <Item>40</Item>
        </Grid>
        <Grid item >
          <Item>50</Item>
        </Grid>
      </Grid>
    </Box>
  );
}