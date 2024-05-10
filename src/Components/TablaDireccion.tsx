import React, { useEffect, useState } from 'react';
import { getDireccion } from '../services/direccion';
import { Direccion } from '../models/direccion';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaDireccion: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [direccion, setDireccion] = useState<Direccion[]>([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'id_direccion',
      dataIndex: 'id_direccion',
      key: 'id_direccion',
    },
    {
        title: 'codigo_postal',
        dataIndex: 'codigopostal',
        key: 'codigopostal',
    },
    {
        title: 'calle',
        dataIndex: 'calle',
        key: 'calle',
    },
    {
        title: 'colonia',
        dataIndex: 'colonia',
        key: 'colonia',
    },
    {
        title: 'num_ext',
        dataIndex: 'Num ext',
        key: 'Num ext',
    },
    {
        title: 'num_int',
        dataIndex: 'Num int',
        key: 'Num int',
    },
    {
        title: 'ciudad',
        dataIndex: 'ciudad',
        key: 'ciudad',
    },

  ];

  useEffect(() => {
    const fetchDireccion = async () => {
      try {
        const direccion = await getDireccion();
        setDireccion(direccion);
      } catch (error) {
        console.error("Error fetching direccion:", error);
      }
    };

    fetchDireccion();
  }, []);

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={direccion} columns={columns} />
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="ID de la direccion"
          name="id_direccion"> 
            <Input/>
          </Form.Item>
          <Form.Item label="Codigo Postal (CP)"
          name="codigopostal"> 
            <Input/>
          </Form.Item>
        </Form>
      </Drawer>
</>
  );
}

export default TablaDireccion;