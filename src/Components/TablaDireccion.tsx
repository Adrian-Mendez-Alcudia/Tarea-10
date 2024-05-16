import React, { useEffect, useState } from 'react';
import { createDireccion, getDireccion } from '../services/direccion';
import { Direccion } from '../models/direccion';
import { Button, Drawer, Form, Input, InputNumber, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaDireccion: React.FC = () => {
  const [direccion, setDireccion] = useState<Direccion[]>([]);
  const [open, setOpen] = useState(false);
  const [codigoPostal, setCodigoPostal] = useState<number>(0);
  const [calle, setCalle] = useState<string>('');
  const [colonia, setColonia] = useState<string>('');
  const [ciudad, setCiudad] = useState<string>('');

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
        const fetchedDireccion = await getDireccion();
        setDireccion(fetchedDireccion);
      } catch (error) {
        console.error("Error fetching direccion:", error);
      }
    };

    fetchDireccion();
  }, []);

  const onChangeCodigoPostal = (value: number | null | undefined) => {
    if (value !== null && value !== undefined) {
      setCodigoPostal(value);
    } else {
      setCodigoPostal(0);
    }
  };

  const handleSubmit = async () => {
    try {
      await createDireccion({
        codigo_postal: codigoPostal,
        calle,
        colonia,
        ciudad,
        id_direccion: 0,
        num_ext: '',
        num_int: '',
        fk_creado_por: 0,
        fk_actualizado: 0,
        fecha_creacion: undefined,
        fecha_actualizado: undefined
      });
      const updatedDireccion = await getDireccion();
      setDireccion(updatedDireccion);
      onClose();
    } catch (error) {
      console.error("Error creating direccion:", error);
    }
  };


  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Table dataSource={direccion} columns={columns} />
      <Drawer title="Agregar " onClose={onClose} visible={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
        <Form onFinish={handleSubmit}>
          <Form.Item label="Codigo Postal" name="codigo_postal">
            <InputNumber defaultValue={codigoPostal} onChange={onChangeCodigoPostal} />
          </Form.Item>
          <Form.Item label="Calle" name="calle">
            <Input value={calle} onChange={(e) => setCalle(e.target.value)} />
          </Form.Item>
          <Form.Item label="Colonia" name="colonia">
            <Input value={colonia} onChange={(e) => setColonia(e.target.value)} />
          </Form.Item>
          <Form.Item label="Ciudad" name="ciudad">
            <Input value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaDireccion;