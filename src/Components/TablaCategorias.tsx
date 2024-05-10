import React, { useEffect, useState } from 'react';
import {getcategorias}from '../services/categorias'
import Categorias from '../models/categorias';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaCategorias: React.FC =() => {
  const [open, setOpen] = useState(false);
  const [categorias, setCategoria] = useState<Categorias[]>([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const columns = [
    {
      title: 'id_categoria',
      dataIndex: 'id_categoria',
      key: 'id_categoria',
    },

    {
        title: 'nombre',
        dataIndex: 'nombre',
        key: 'nombre',
    },

    {
        title: 'fecha_creacion',
        dataIndex: 'fecha_creacion',
        key: 'fecha_creacion',
    },

    {
        title: 'fecha_actualizado',
        dataIndex: 'fecha_actualizacion',
        key: 'fecha_actualizacion',
    },

    {
        title: 'fk_creado_por',
        dataIndex: 'fkCreadfk_creado_poroPor',
        key: 'fk_creado_por',
    },

    {
        title: 'fkActualizadoPor',
        dataIndex: 'fk_actualizado',
        key: 'fk_actualizado',
    },




  ];

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const categorias = await getcategorias();
        setCategoria(categorias);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };

    fetchCategoria();
  }, []);

  
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={categorias} columns={columns} />
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Nombre de la categoria"
          name="nombre"> 
            <Input/>
          </Form.Item>
          <Form.Item label="ID de la categoria"
          name="id_categoria"> 
            <Input/>
          </Form.Item>
        </Form>
      </Drawer>
</>
  );
  
}

export default TablaCategorias;