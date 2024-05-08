import React, { useEffect, useState } from 'react';
import { getSesionProducto } from '../services/sesionesProductos';
import { SesionProducto } from '../models/sesionesProductos';
import { Table } from "antd";

const TablaSesionesProductos: React.FC = () => {
  const [sesionesproductos, setSesionProducto] = useState<SesionProducto[]>([]);

  const columns = [
    {
      title: 'fk_sesion',
      dataIndex: 'fk_sesion',
      key: 'fk_sesion',
    },
    {
        title: 'fk_producto',
        dataIndex: 'fk_producto',
        key: 'fk_producto',
    },
    {
        title: 'cantidad',
        dataIndex: 'cantidad',
        key: 'cantidad',
    },
        
  ];

  useEffect(() => {
    const fetchSesionProducto = async () => {
      try {
        const sesion = await getSesionProducto();
        setSesionProducto(sesion);
      } catch (error) {
        console.error("Error fetching sesion:", error);
      }
    };

    fetchSesionProducto();
  }, []);

  return (
    <Table dataSource={sesionesproductos} columns={columns} />
  );
}

export default TablaSesionesProductos;