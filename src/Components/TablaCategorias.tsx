import React, { useEffect, useState } from 'react';
import {getcategorias}from '../services/categorias'
import Categorias from '../models/categorias';
import { Table } from "antd";

const TablaCategorias: React.FC =() => {
  const [categorias, setCategoria] = useState<Categorias[]>([]);

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
        const categorias = await getcategorias();
        setCategoria(categorias);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };

    fetchCategoria();
  }, []);

  
  return (
  <Table dataSource={categorias} columns={columns} />
  );
  
}

export default TablaCategorias;