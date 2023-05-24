import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ContainerX from './Inicio-Seguro/MainContainer';
// import PersistentDrawerStiven from './Drawer/DrawerPersistente';



export default  function App() {
  return (
    <div>
   {/* <PersistentDrawerStiven/> */}
    <ContainerX />
    </div>
  );
}

