import React, { useEffect, useState } from 'react';
import { getGenero } from '../services/genero';
import { Genero } from '../models/genero';
import { Table } from "antd";

const TablaGenero: React.FC = () => {
  const [genero, setGenero] = useState<Genero[]>([]);

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
        const genero = await getGenero();
        setGenero(genero);
      } catch (error) {
        console.error("Error fetching genero:", error);
      }
    };

    fetchGenero();
  }, []);

  return (
    <Table dataSource={genero} columns={columns} />
  );
}

export default TablaGenero;