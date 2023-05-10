import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
export default function ContPequeInfo() {
  return (
    <Card sx={{
      border: 0,
      boxShadow: 9,
      pb: 5,
      left: "center",
      // top: -12,
      maxWidth: '104vw !important',
      position: "relative",
      borderRadius: "20px",
      background: " linear-gradient(90deg, rgba(47,217,17,1) 3%, rgba(25,94,13,1) 26%, rgba(17,24,46,1) 56%, rgba(46,138,246,1) 80%);"
    }}>
      <Typography variant="h6" sx={{
        position: "absolute",
        top: "5px",
        left: "3%",
        color: "#ffffff"
      }}>
        Informacion Del Articulo 
      </Typography>
    </Card>
  );
}