import React, { useEffect, useState } from 'react';
import { getCliente } from '../services/clientes';
import  Cliente  from '../models/clientes';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaClientes: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'ID Cliente',
      dataIndex: 'id_cliente',
      key: 'id_cliente',
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'apellido',
      dataIndex: 'apellido',
      key: 'apellido',
    },
    {
        title: 'fecha_nacimiento',
        dataIndex: 'fecha_de_nacimiento',
        key: 'fecha_de_nacimiento',
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
    const fetchClientes = async () => {
      try {
        const clientes = await getCliente();
        setClientes(clientes);
      } catch (error) {
        console.error("Error fetching clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={clientes} columns={columns} />
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Nombre del cliente"
          name="nombre"> 
            <Input/>
          </Form.Item>
          <Form.Item label="ID del cliente"
          name="id_cliente"> 
            <Input/>
          </Form.Item>
        </Form>
      </Drawer>
</>
  );
}

export default TablaClientes;