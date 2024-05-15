export interface Product {
    ID_Producto: number;
    Nombre: string;
    Descripcion: string;
    precio: number;
    ID_Categoria: number;
    FechaCreacion?: Date;
    fk_CreadoPor?: number | null;
    FechaActu?: Date| null;
    fk_ActualizadoPor?: number| null;
    FechaEliminado?: Date | null;
    fk_EliminadoPor?: number | null;
  }
  export default Product;