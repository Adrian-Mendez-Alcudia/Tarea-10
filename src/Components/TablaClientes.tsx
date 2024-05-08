import React, { useEffect, useState } from 'react';
import { getCliente } from '../services/clientes';
import  Cliente  from '../models/clientes';
import { Table } from "antd";

const TablaClientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

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
        dataIndex: 'fecha_nacimiento',
        key: 'fecha_nacimiento',
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
    <Table dataSource={clientes} columns={columns} />
  );
}

export default TablaClientes;