
import { Routes, Route } from 'react-router-dom'
import FotoPerfilStudiante from '../Inicio-drawer/DatosPersonales';
import Notas from '../MG/Notas';
import BasicGrid from "../horario/consultahorario/grid";
import ContainerX from '../Inicio-Seguro/MainContainer';

export default function RutasDrawer() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<ContainerX />} />
        <Route path={"/Inicio"} element={<FotoPerfilStudiante />} />
        <Route path={"/Notas"} element={<Notas />} />
        <Route path={"/Horario"} element={<BasicGrid />} />
       

      </Routes>
    </div>
  );
}
