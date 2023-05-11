import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable, DataTableSelectionChangeEvent, DataTableValueArray } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/productservice';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { InputNumber, InputNumberChangeEvent, InputNumberValueChangeEvent  } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Box } from '@mui/material';
import CuadroBuscar from './cuadrobuscar';
import BotonDeFiltrar from './botonfiltrar';
import BotonArchivo from './botondocumento';
import BotonEnlaceExterno from './botonenlace';


interface Product {
    id: string;
    code?: string;
    name: string;
    image: string | null;
    description: string;
    category: string | null;
    price: number;
    quantity: number;
    rating: number;
    inventoryStatus: string;
    [key: string]: any; // firma de índice
  }
  

export default function ProductsDemo() {
    let emptyProduct = {
        id: '',
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [products, setProducts] = useState<Product[]>([]);
    const [productDialog, setProductDialog] = useState<boolean>(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState<boolean>(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
    const [product, setProduct] = useState<Product>(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<DataTableValueArray>>(null);
   



    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products: Product[] = [];
            if (products) {
              _products = [...products];
            }
            
            let _product = { ...product };

            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                if (toast.current) {
                    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
                  }                  
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                if (toast.current) {
                    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
                  }                  
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product: Product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product: Product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products ? products.filter((val) => val.id !== product.id) : [];

        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        if (toast.current) {
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          }          
    };

    const findIndexById = (id: string) => {
        let index = -1;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = (): string => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        if (dt.current) {
            dt.current.exportCSV();
          }          
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => selectedProducts ? !selectedProducts.includes(val) : true);


        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts([]);
        if (toast.current) {
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          } 
    };

    const onCategoryChange = (e: RadioButtonChangeEvent) => {
        let _product = { ...product };

        _product['category'] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[`${name}`] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e: InputNumberChangeEvent, propertyName: string) => {
        const updatedProduct = { ...products, [propertyName]: e.value };
        setProducts(updatedProduct);
      };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                {/* <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} /> */}
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return ( 
        <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
        );
    };

    // const imageBodyTemplate = (rowData: Product) => {
    //     return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image ? rowData.image : undefined} className="shadow-2 border-round" style={{ width: '64px' }} />;

    // };

    const priceBodyTemplate = (rowData: Product) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData: Product) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData: Product) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
    };

    const actionBodyTemplate = (rowData: Product) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <Box   
           sx={{
            border:0,
            position: "absolute",
            borderColor: "black", 
            top: -69,
            left: 5, 
            margin:0,
            width: "50%",       //ancho
            height: "14%"}}     //largo  
            > 
            <BotonDeFiltrar/>
          <CuadroBuscar/> 
           <BotonArchivo/>
          <BotonEnlaceExterno/> 
        </Box>
       
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );




    function handleProductSelection(event: DataTableSelectionChangeEvent<DataTableValueArray>): void {
        throw new Error('Function not implemented.');
    }
    
   
    return (
        <Box   sx={{
            position:'absolute',
            border: 1,
            borderColor: "black",
            top: 5,
            left: 5,
            width: "97%",
            height: "90%",
           
          
            
        }} >
            
            <div>
            <Toast ref={toast} />
            <div className="card">
                <Toolbar  className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate} ></Toolbar>

                <DataTable  size='small' ref={dt} value={products} selection={selectedProducts} onSelectionChange={handleProductSelection}
                        dataKey="id"  paginator rows={5} rowsPerPageOptions={[5]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header} >
                    {/* <Column selectionMode="multiple" exportable={false}></Column> */}
                    <Column field="price" header="Tipo De Documento" body={priceBodyTemplate} sortable style={{ minWidth: '2rem' }}></Column>
                    <Column field="code" header="Numero Documento" sortable style={{ minWidth: '2rem' }}></Column>
                    <Column field="name" header="Primer Nombre" sortable style={{ minWidth: '2rem' }}></Column>
                    {/* <Column field="image" header="Image" body={imageBodyTemplate}></Column> */}
                    
                    <Column field="category" header="Primer Apellido" sortable style={{ minWidth: '2rem' }}></Column>
                    {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
                    {/* <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
                    <Column  header="Accion"  body={actionBodyTemplate} exportable={false} style={{ minWidth: '7rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Name
                    </label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Description
                    </label>
              
                </div>

                <div className="field">
                    <label className="mb-3 font-bold">Primer Apellido</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price" className="font-bold">
                            Price
                        </label>

                    </div>
                    <div className="field col">
                        <label htmlFor="quantity" className="font-bold">
                            Quantity
                        </label>
                    </div>
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
        
        </Box>
        
    );
}
        
        