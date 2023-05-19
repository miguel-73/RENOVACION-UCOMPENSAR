
import { Routes, Route } from 'react-router-dom'
import FotoPerfilStudiante from '../Inicio-drawer/DatosPersonales';
import Notas from '../Drawer/MG/Notas';
import BasicGrid from '../horario/consultahorario/grid';


export default function RutasDrawer() {
    return (
        <div>
            <Routes>
                <Route
                    path={"/Inicio"}
                    element={<FotoPerfilStudiante />}
                />
                <Route
                    path={"/Notas"}
                    element={<Tabla />}
                />
                
            </Routes>
       
          

        </div>
    );
}

