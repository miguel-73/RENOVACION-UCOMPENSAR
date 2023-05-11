import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {ProductData} from './ProductData';
import "../StyleComponents/styleComponents.css"




interface ProductDataGeneral {
  id: string;
  code: string;
  name: string;
  quantity: number;
  action: string;
}

// interface sizeTable {
//   value: string;
// }

const TableData = () => {

  const [products, setProducts] = useState<ProductDataGeneral[]>([]);

  // const [sizeOption] = useState<sizeTable[]>([
  //   {value:'small'}
  // ])

  // const [size] = useState<string>(sizeOption[0].value)

  useEffect(() => {
    ProductData.getProductDataInfo().then(data => setProducts(data));
    }, []);



  return (
            <DataTable value={products} size='small' paginator rows={5}  paginatorClassName='pagi-style' removableSort tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Código" sortable style={{ width: '25%',fontSize:12 }}></Column>
                <Column field="name" header="Nombre" sortable style={{ width: '25%',fontSize:12 }}></Column>
                <Column field="quantity" header="Cantidad" sortable style={{ width: '25%',fontSize:12 }}></Column>
                <Column field="action" header="Acción" sortable style={{ width: '25%',fontSize:12 }}></Column>
            </DataTable> 
  )
}

export default TableData;
