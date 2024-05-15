export interface Direccion {
    id_direccion: number;
    codigo_postal: number;
    calle: string;
    colonia: string;
    num_ext: string;
    num_int: string;
    ciudad: string;
    fecha_creacion?: Date;
    fecha_actualizado?: Date;
    fk_creado_por: number;
    fk_actualizado: number;
    fecha_eliminacion?: Date | null;
    fk_eliminado_por?: number | null;
  }

  export default Direccion;