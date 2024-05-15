import React, { useEffect, useState } from 'react';
import { getSesionProducto, createSesionProducto } from '../services/sesionesProductos';
import { SesionProducto } from '../models/sesionesProductos';
import { Button, Drawer, Form, InputNumber, InputNumberProps, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaSesionesProductos: React.FC = () => {
  const [sesionesproductos, setSesionesProductos] = useState<SesionProducto[]>([]);
  const [open, setOpen] = useState(false);
  const [cantidad, setCantidad] = useState<number>(0);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'fk_sesion',
      dataIndex: 'fk_sesion',
      key: 'fk_sesion',
    },
    {
        title: 'fk_producto',
        dataIndex: '  ',
        key: 'fk_producto',
    },
    {
        title: 'cantidad',
        dataIndex: 'cantidad',
        key: 'cantidad',
    },
        
  ];

  const onChange: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setCantidad(value);
    } else {
      setCantidad(0);
    }
  };
  
  useEffect(() => {
    const fetchSesionProducto = async () => {
      try {
        const sesion = await getSesionProducto();
        setSesionesProductos(sesion);
        // Assuming 'usuarios' is the correct state to update
        setSesionesProductos(sesion); 
      } catch (error) {
        console.error("Error fetching sesion:", error);
      }
    };

    fetchSesionProducto();
  }, []);

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    try {
      await createSesionProducto({
        fk_sesion: randomID,
        fk_producto: randomID,
        cantidad  });
      const updateSesionesProductos = await getSesionProducto();
      setSesionesProductos(updateSesionesProductos);
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
      <Table dataSource={sesionesproductos} columns={columns} />
      <Drawer title="Agregar " onClose={onClose} visible={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
        <Form>
          <Form.Item label="cantidad" name="cantidad"> 
          <InputNumber defaultValue={cantidad} onChange={onChange} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaSesionesProductos;