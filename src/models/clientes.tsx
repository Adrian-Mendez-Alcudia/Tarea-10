export interface Cliente {
  id_cliente?: number;
  nombre: string;
  apellido: string;
  fecha_de_nacimiento: Date;
  fk_genero: number;
  telefono?: string;
  correo?: string;
  fk_direccion?: number;
  fecha_creacion?: Date | null;
  fecha_actualizacion?: Date | null;
  fk_creado_por?: number;
  fk_actualizado_por?: number;
  fecha_eliminacion?: Date | null;
  fk_eliminado_por?: number | null;
}

export default Cliente;
