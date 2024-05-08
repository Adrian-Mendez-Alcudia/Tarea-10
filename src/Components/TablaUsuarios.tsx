import React, { useEffect, useState } from 'react';
import { getUsuario } from '../services/usuarios';
import { Usuario } from '../models/ususarios';
import { Table } from "antd";

const TablaUsuarios: React.FC = () => {
  const [usuarios, setUsuario] = useState<Usuario[]>([]);

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
        setUsuario(usuarios);
      } catch (error) {
        console.error("Error fetching usuarios:", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <Table dataSource={usuarios} columns={columns} />
  );
}

export default TablaUsuarios;