import React, { useEffect, useState } from 'react';
import { createGenero, getGenero } from '../services/genero';
import { Genero } from '../models/genero';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaGenero: React.FC = () => {
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [open, setOpen] = useState(false);
  const [genero, setGenero] = useState<string>('');

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
        const fetchedGenero = await getGenero();
        setGeneros(fetchedGenero);
      } catch (error) {
        console.error("Error fetching genero:", error);
      }
    };

    fetchGenero();
  }, []);

  const handleSubmit = async () => {
    try {
      await createGenero({
        genero,
        id_genero: 0,
        fecha_creacion: undefined,
        fecha_actualizacion: undefined,
        fk_creado_por: 0,
        fk_actualizado_por: 0
      });
      const updateGeneros = await getGenero();
      setGeneros(updateGeneros);
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
      <Table dataSource={generos} columns={columns} />
      <Drawer title="Agregar " onClose={onClose} visible={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
        <Form>
          <Form.Item label="Genero" name="genero"> 
          <Input value={genero} onChange={(e) => setGenero(e.target.value)} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaGenero;