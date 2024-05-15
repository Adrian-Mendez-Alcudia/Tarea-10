import React, { useEffect, useState } from 'react';
import { createCliente, getCliente } from '../services/clientes';
import  Cliente  from '../models/clientes';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Drawer, Form, Input, Table } from "antd";
import DrawerFooter from './DrawerFooter';

const TablaClientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('');
  const [fechaNacimiento, setfechaNacimiento] = useState<Date>(new Date());
  
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
        const fetchedClientes = await getCliente();
        setClientes(fetchedClientes);
      } catch (error) {
        console.error("Error fetching clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange: DatePickerProps['onChange'] = (date) => {
    const selectedDate = new Date(date.year(), date.month() + 1, date.date());
    setfechaNacimiento(selectedDate);
  };

  const handleSubmit = async () => {
    try {
      await createCliente({
        nombre,
        apellido,
        fechaDeNacimiento: fechaNacimiento,
        idCliente: 0,
        fkGenero: 0,
        telefono: '',
        correo: '',
        fkDireccion: 0,
        fechaCreacion: null,
        fechaActualizacion: null,
        fkCreadoPor: 0,
        fkActualizadoPor: 0,
        fechaEliminacion: null,
        fkEliminadoPor: null
      });
      const updatedClientes = await getCliente();
      setClientes(updatedClientes);
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
    <Table dataSource={clientes} columns={columns} />
    <Drawer title="Agregar " onClose={onClose} visible={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>
      <Form>
        <Form.Item label="Nombre" name="nombre"> 
        <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Item>
        <Form.Item label="Apellido" name="apellido"> 
        <Input value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </Form.Item>
        <Form.Item label="Fecha Nacimiento" name="fecha_nacimiento"> 
        <DatePicker onChange={onChange} />
        </Form.Item>
      </Form>
    </Drawer>
  </>
);
}

export default TablaClientes;