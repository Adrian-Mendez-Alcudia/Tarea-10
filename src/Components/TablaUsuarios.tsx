import React, { useEffect, useState } from 'react';
import { getUsuario } from '../services/usuarios';
import { Usuario } from '../models/usuarios';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaUsuarios: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [usuarios, setUsuario] = useState<Usuario[]>([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'id_usuario',
      dataIndex: 'id_usuario',
      key: 'id_usuario',
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
    const fetchUsuario = async () => {
      try {
        const usuarios = await getUsuario();
        setUsuario(usuarios);
      } catch (error) {
        console.error("Error fetching usuarios:", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={usuarios} columns={columns} />
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Nombre de usuario"
          name="nombre"> 
            <Input/>
          </Form.Item>
          <Form.Item label="Apellido de usuario"
          name="apellido"> 
            <Input/>
          </Form.Item>
        </Form>
      </Drawer>
</>
  );
}

export default TablaUsuarios;