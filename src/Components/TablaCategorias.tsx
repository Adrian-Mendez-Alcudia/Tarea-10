import React, { useEffect, useState } from 'react';
import { createCategoria, getcategorias } from '../services/categorias';
import Categorias from '../models/categorias';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaCategorias: React.FC = () => {
  const [categorias, setCategoria] = useState<Categorias[]>([]);
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState<string>('');

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
        const fetchedCategorias = await getcategorias();
        setCategoria(fetchedCategorias);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };

    fetchCategoria();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    try {
      await createCategoria({
        nombre,
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        fk_creado_por: randomID,
        id_categoria: 0,
        fk_actualizado: 0,
        fecha_eliminacion: null,
        fk_eliminado: null
      });

      const updatedUsuarios = await getcategorias();
      setCategoria(updatedUsuarios);
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
    <Table dataSource={categorias} columns={columns} />
    <Drawer title="Agregar Categoría" onClose={onClose} visible={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
      <Form>
        <Form.Item label="Nombre" name="nombre"> 
        <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Item>
      </Form>
    </Drawer>
  </>
);
}

export default TablaCategorias;