import React, { useEffect, useState } from "react";
import { getProducts } from "./services/product";
import { Table } from "antd";
import { Product } from "./models/product";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const columns = [
    {
      title: 'ID_Producto',
      dataIndex: 'id_producto',
      key: 'id_producto',
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'precio',
      dataIndex: 'precio_unitario',
      key: 'precio_unitario',
    },
    {
      title: 'ID_Categoria',
      dataIndex: 'fk_categoria',
      key: 'fk_categoria',
    },
    {
      title: 'FechaCreacion',
      dataIndex: 'fecha_creacion',
      key: 'fecha_creacion',
    },
    {
      title: 'fecha_actualizacion',
      dataIndex: 'fecha_actualizacion',
      key: 'fecha_actualizacion',
    },
    {
      title: 'FechaEliminado',
      dataIndex: 'fecha_eliminacion',
      key: 'fecha_eliminacion',
    },


  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={products}
      />
        
    </>
  );
}

export default App;