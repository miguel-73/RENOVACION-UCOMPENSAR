import React, { useEffect, useState } from 'react';
import { Tree} from 'primereact/tree';
import  TreeNode  from 'primereact/treenode';
import { Typography } from '@mui/material';



export const NodeService = {
    getTreeNodesData() {
        return [
            {
                key: '1',
                label: 'Almacen',
                data: 'Info Almacen',
                icon: 'pi pi-fw pi-inbox',
                children: [
                    {
                        key: '1-1',
                        label: 'Gestor de Inventario',
                        data: 'Info Inventario',
                        icon: 'pi pi-fw pi-cog',
                        children: 
                        [
                            { 
                                key: '1-1-1',
                                label: 'Option 1',
                                icon: 'pi pi-fw pi-file',
                                data: 'Info ?' 
                            }
                        ]
                        
                    },
                    {
                        key: '1-2',
                        label: 'Entrada de Almacen',
                        data: 'Info Entrada Almacen',
                        icon: 'pi pi-fw pi-home',
                        children: 
                        [
                            { 
                                key: '1-2-1',
                                label: 'Entrada de Bienes',
                                icon: 'pi pi-fw pi-file',
                                data: 'Invoices for this month' 
                            }
                        ]
                    },
                    {
                        key: '1-3',
                        label: 'Registro de Solicitudes',
                        data: 'Info Solicitudes',
                        icon: 'pi pi-fw pi-cog',
                        children:
                        [
                            { 
                                key: '1-3-1',
                                label: 'Option 1',
                                icon: 'pi pi-fw pi-file',
                                data: 'Info ?' 
                            }
                        ]
                    },
                    {
                        key: '1-4',
                        label: 'Notificaciones',
                        data: 'Info Notificaciones',
                        icon: 'pi pi-fw pi-cog',
                        children:
                        [
                            { 
                                key: '1-4-1',
                                label: 'Option 1',
                                icon: 'pi pi-fw pi-file',
                                data: 'Info ?' 
                            }
                        ]
                    },
                    {
                        key: '1-5',
                        label: 'Tableros de Control',
                        data: 'Info Tableros Control',
                        icon: 'pi pi-fw pi-cog',
                        children:
                        [
                            { 
                                key: '1-5-1',
                                label: 'Option 1',
                                icon: 'pi pi-fw pi-file',
                                data: 'Info ?' 
                            }
                        ]
                    },
                    {
                        key: '1-6',
                        label: 'Indicadores',
                        data: 'Info Indicadores',
                        icon: 'pi pi-fw pi-cog',
                        children:
                        [
                            { 
                                key: '1-6-1',
                                label: 'Option 1',
                                icon: 'pi pi-fw pi-file',
                                data: 'Info ?' 
                            }
                        ]
                    },
                    {
                        key: '1-7',
                        label: 'Configuración',
                        data: 'Info Configuración',
                        icon: 'pi pi-fw pi-cog',
                        children:
                        [
                            { 
                                key: '1-7-1',
                                label: 'Option 1',
                                icon: 'pi pi-fw pi-file',
                                data: 'Info ?' 
                                }
                        ]
                    },

                ]

            },
               
        ];
    },


    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
};




function SelectNombreApellido() {
  return (
    <>
        <Typography>
            Nombre Apellido
        </Typography>
    </>
  )
}

export default SelectNombreApellido










