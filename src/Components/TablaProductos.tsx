import React, { useEffect, useState } from 'react';
import { createProducts, getProducts } from '../services/product';
import type { InputNumberProps } from 'antd';
import { Product } from '../models/product';
import { Button, Drawer, Form, Input, InputNumber, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaProductos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [descripcion, setDescripcion] = useState<string>('');
  const [precio, setPrecio] = useState<number>(0);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'Descripcion',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Precio',
      dataIndex: 'precio_unitario',
      key: 'precio_unitario',
    },
    {
      title: 'fk_categoria',
      dataIndex: 'fk_categoria',
      key: 'fk_categoria',
    },
    {
      title: 'fecha_creacion',
      dataIndex: 'fecha_creacion',
      key: 'fecha_creacion',
    },

    {
      title: 'fecha_creacion',
      dataIndex: 'fecha_creacion',
      key: 'fecha_creacion',
    },

    {
      title: 'fecha_actualizacion',
      dataIndex: 'fecha_actualizacion',
      key: 'fecha_actualizacion',
    },




  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const onChange: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setPrecio(value);
    } else {
      setPrecio(0);
    }
  };

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    try {
      await createProducts({
        precio,
        ID_Producto: 0,
        Nombre: '',
        ID_Categoria: 0,
        FechaCreacion: undefined,
        Descripcion: ''
      });
      const updatedUsuarios = await getProducts();
      setProducts(updatedUsuarios);
      onClose();
    } catch (error) {
      console.error("Error creating usuario:", error);
    }
  };

  
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={products} columns={columns} />
      <Drawer title="Agregar " onClose={onClose} visible={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
        <Form>
          <Form.Item label="Descripcion" name="descripcion"> 
          <Input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </Form.Item>
          <Form.Item label="Precio" name="precio"> 
          <InputNumber addonAfter="$" value={precio} defaultValue={0} onChange={onChange}  />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaProductos;