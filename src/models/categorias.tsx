interface Categoria {
  id_categoria: number;
  nombre: string;
  fecha_creacion: Date | null;
  fecha_actualizacion: Date | null;
  fk_creado_por: number;
  fk_actualizado: number;
  fecha_eliminacion: Date | null;
  fk_eliminado: number | null;
}

export default Categoria;
