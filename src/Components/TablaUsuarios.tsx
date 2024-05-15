import React, { useEffect, useState } from 'react';
import { getUsuario, createUsuario } from '../services/usuarios';
import { Usuario } from '../models/usuarios';
import { Button, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaUsuarios: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    try {
      await createUsuario({
         nombre,
         apellido,
         fecha_creacion: new Date(),
         fecha_actualizacion: new Date(),
         fk_creado_por: randomID,
         fk_actualizado_por: randomID,});
      const updatedUsuarios = await getUsuario();
      setUsuarios(updatedUsuarios);
      onClose();
    } catch (error) {
      console.error("Error creating usuario:", error);
    }
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
      title: 'Apellido',
      dataIndex: 'apellido',
      key: 'apellido',
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
        setUsuarios(usuarios);
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
      <Drawer title="Agregar usuario" onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
      <Form>
      <Form.Item label="Nombre del usuario" name="nombre">
            <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Item>
          <Form.Item label="Apellido del usuario" name="apellido">
            <Input value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

export default TablaUsuarios;