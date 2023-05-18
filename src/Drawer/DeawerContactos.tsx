import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function DrawerContactos() {
    const [visibleLeft, setVisibleLeft] = useState<boolean>(false);
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [visibleTop, setVisibleTop] = useState<boolean>(false);
    const [visibleBottom, setVisibleBottom] = useState<boolean>(false);

    return (
        <div className="card">
         
       
  <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }} onClick={() => setVisibleRight(true)}></i>


            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Right Sidebar</h2>
                <p>
                CONTACTOS 
                </p>
            </Sidebar>

          
        </div>
    )
}
        