export interface Genero {
    id_genero: number;
    genero: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
    fk_creado_por: number;
    fk_actualizado_por: number;
    fecha_eliminacion?: Date | null;
    fk_eliminado_por?: number | null;
  }
  
  export default Genero;