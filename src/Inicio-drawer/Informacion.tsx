import DatosApellido from "./DatosPersonales/Apellido";
import DatosCorreo from "./DatosPersonales/Correo";
import DatosDireccionIp from "./DatosPersonales/DirectionIp";
import DatosIdentification from "./DatosPersonales/Identificaion";
import NombreDatos from "./DatosPersonales/Nombre";



export default function InformacionPersonalInicio() {
    return (
        <div>
            <DatosIdentification/>
            <br />
            <NombreDatos/>
            <br />
            < DatosApellido/>
            <br />
            <DatosDireccionIp/>
            <br />
            < DatosCorreo/>

        </div>
    );
}


