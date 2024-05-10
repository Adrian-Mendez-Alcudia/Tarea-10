import React, { useEffect, useState } from 'react';
import { getGenero } from '../services/genero';
import { Genero } from '../models/genero';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaGenero: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [genero, setGenero] = useState<Genero[]>([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'id_genero',
      dataIndex: 'id_genero',
      key: 'id_genero',
    },
    {
        title: 'genero',
        dataIndex: 'genero',
        key: 'genero',
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
    {
        title: 'fk_creado_por',
        dataIndex: 'fk_creado_por',
        key: 'fk_creado_por',
    },
    
    {
        title: 'fk_actualizado_por',
        dataIndex: 'fk_actualizado_por',
        key: 'fk_actualizado_por',
    },
      
    
  ];

  useEffect(() => {
    const fetchGenero = async () => {
      try {
        const genero = await getGenero();
        setGenero(genero);
      } catch (error) {
        console.error("Error fetching genero:", error);
      }
    };

    fetchGenero();
  }, []);

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={genero} columns={columns} />
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="ID del genero"
          name="id_genero"> 
            <Input/>
          </Form.Item>
          <Form.Item label="Genero del usuario"
          name="genero"> 
            <Input/>
          </Form.Item>
        </Form>
      </Drawer>
</>
  );
}

export default TablaGenero;