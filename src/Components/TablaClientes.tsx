import React, { useEffect, useState } from 'react';
import { createCliente, getCliente } from '../services/clientes';
import { Cliente } from '../models/clientes';
import type { DatePickerProps } from 'antd';
import { Button, Drawer, Form, Input, Table, DatePicker } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaClientes: React.FC = () => {
  const [Cliente, setCliente] = useState<Cliente[]>([]);
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [Genero, setGenero] = useState<string>('');
  const [fecha_de_nacimiento, setfecha_de_nacimiento] = useState<Date>(new Date());
  
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
      title: 'Apellido',
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
    const fetchCliente = async () => {
      try {
        const fetchedCliente = await getCliente();
        setCliente(fetchedCliente);
      } catch (error) {
        console.error("Error fetching clientes:", error);
      }
    };

    fetchCliente();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange: DatePickerProps['onChange'] = (date) => {
    const selectedDate = new Date(date.year(), date.month() + 1, date.date());
    setfecha_de_nacimiento(selectedDate);
  };

  const handleSubmit = async () => {
    try {
      await createCliente({
        nombre,
        apellido,
        fecha_de_nacimiento: fecha_de_nacimiento,
        id_cliente: 0,
        fk_genero: 0
      });
      const updatedCliente = await getCliente();
      setCliente(updatedCliente);
      onClose();
    } catch (error) {
      console.error("Error creando cliente:", error);
    }
  };


  return (
    <>
    <Button type="primary" onClick={showDrawer}>
      Open
    </Button>
    <Table dataSource={Cliente} columns={columns} />
    <Drawer title="Agregar " onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
      <Form>
        <Form.Item label="Nombre" name="nombre"> 
        <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Item>
        <Form.Item label="Apellido" name="apellido"> 
        <Input value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </Form.Item>
        <Form.Item label="genero" name="fk_genero"> 
        <Input value={Genero} onChange={(e) => setGenero(e.target.value)} />
        </Form.Item>

        <Form.Item label="Fecha Nacimiento" name="fecha_de_nacimiento"> 
        <DatePicker onChange={onChange} />
        </Form.Item>
      </Form>
    </Drawer>
  </>
);
}

export default TablaClientes;