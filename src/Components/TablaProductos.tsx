import React, { useEffect, useState } from 'react';
import {getProducts}from '../services/product'
import { Product } from '../models/product';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaProductos: React.FC =() => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

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
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={products} columns={columns} />
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Nombre del producto"
          name="product"> 
            <Input/>
          </Form.Item>
          <Form.Item label="Precio del producto"
          name="precio_unitario"> 
            <Input/>
          </Form.Item>
        </Form>
      </Drawer>
</>
  );
  
}

export default TablaProductos;