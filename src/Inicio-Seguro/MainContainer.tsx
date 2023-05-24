import { Container } from "@mui/material";
import Logo from "./Box/Logo";
import SistemaGestion from './Card/System';
import ContenidoPrincipal from './Box/MainContent';
import Llamado from "./Box/Llamado";
import Information from './Box/Information';
import OptionsEx from "./Box/Options";
import InformationV2 from "./Box/InformationV2";

function ContainerX() {
    return (
        <Container
            sx={{
                backgroundImage: "url(./Images/Fondo1.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "500px",
                backgroundPosition: "center",
                backgroundPositionY: "150px",
                width: "100%",
                height: "100%",
                position: "auto",
                marginBottom: "20px",
            }}>

            <Logo />
            <SistemaGestion />
            <ContenidoPrincipal />
            <Llamado />
            <Information />
            <InformationV2 />
            <OptionsEx />
        </Container>
    )
}
export default ContainerX;