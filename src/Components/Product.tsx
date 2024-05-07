import React, { useEffect, useState } from 'react';
import {getProducts}from '../services/product'
import { products } from '../models/product';
import { Table } from "antd";

const Product: React.FC =() => {
    const [products, setProducts] = useState<products[]>([]);
  
    const columns = [
      {
        title: 'Descripcion',
        dataIndex: 'nombre',
        key: 'nombre',
      },
      {
        title: 'Precio',
        dataIndex: 'precio_unitario',
        key: 'precio_unitario',
      }
    ];
  
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
  
    
    
    return (
    <Table dataSource={products} columns={columns} />
    );
    
  }
  
  export default Product;