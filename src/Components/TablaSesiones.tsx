import React, { useEffect, useState } from 'react';
import { getSesion } from '../services/sesiones';
import { Sesion } from '../models/sesiones';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaSesiones: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [sesion, setSesion] = useState<Sesion[]>([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'id_sesion',
      dataIndex: 'id_sesion',
      key: 'id_sesion',
    },
    {
        title: 'fecha_sesion',
        dataIndex: 'fecha_sesion',
        key: 'fecha_sesion',
    },
    {
        title: 'hora_sesion',
        dataIndex: 'hora_sesion',
        key: 'hora_sesion',
    },
    {
        title: 'fk_cliente',
        dataIndex: 'fk_cliente',
        key: 'fk_cliente',
    },
    {
        title: 'fecha_venta',
        dataIndex: 'fecha_venta',
        key: 'fecha_venta',
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
    const fetchSesion = async () => {
      try {
        const sesion = await getSesion();
        setSesion(sesion);
      } catch (error) {
        console.error("Error fetching sesion:", error);
      }
    };

    fetchSesion();
  }, []);

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={sesion} columns={columns} />
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item label="Fecha de la sesion"
          name="fecha_sesion"> 
            <Input/>
          </Form.Item>
          <Form.Item label="ID de la sesion"
          name="id_sesion"> 
            <Input/>
          </Form.Item>
        </Form>
      </Drawer>
</>
  );
}

export default TablaSesiones;